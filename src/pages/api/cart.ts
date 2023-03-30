import { Cart } from '@/domain/cart/type'
import { readCartFile, writeCartFile } from '@/services/db/cart/controller'
import { ERROR_MESSAGE } from '@/services/db/constant'
import { DatabaseError, DatabaseResponse } from '@/services/db/type'
import type { NextApiRequest, NextApiResponse } from 'next'

const isCartResponse = (
  contentsJson: object
): contentsJson is Pick<DatabaseResponse, 'cart'> => {
  return 'cart' in contentsJson
}

const isCart = (body: Cart): body is Cart => {
  const CART_INSTANCE: Cart = {
    id: '',
    quantity: 0,
  }

  let result = true
  for (const key of Object.keys(CART_INSTANCE)) {
    if (!(key in body)) {
      result = false
      break
    }
  }

  return result
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pick<DatabaseResponse, 'cart'> | DatabaseError>
) {
  try {
    const contents = await readCartFile()
    const response: Pick<DatabaseResponse, 'cart'> = JSON.parse(contents)

    if (req.method === 'PATCH') {
      const body = req.body
      if (isCartResponse(response) && isCart(body)) {
        const index = response.cart.findIndex(
          (cart: Cart) => cart.id === body.id
        )

        if (index < 0) {
          const lastId = response['cart'].length

          response['cart'] = [
            ...response['cart'],
            { id: `${lastId}`, quantity: 1 },
          ]
        } else {
          response['cart'][index] = body
        }
      } else {
        throw Error
      }

      await writeCartFile(response)

      res.status(200).json(response)
    } else if (req.method === 'GET') {
      res.status(200).json(response)
    } else {
      throw Error
    }
  } catch (error) {
    res.status(500).json(ERROR_MESSAGE)
  }
}
