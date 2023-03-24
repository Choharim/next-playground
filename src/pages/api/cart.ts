import { Cart } from '@/domain/cart/type'
import { readCartFile, writeCartFile } from '@/services/db/cart/controller'
import { ERROR_MESSAGE } from '@/services/db/constant'
import { DatabaseError } from '@/services/db/type'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cart[] | DatabaseError>
) {
  try {
    const contents = await readCartFile()
    const response = JSON.parse(contents)

    if (req.method === 'POST') {
      const { id } = req.query

      const index = response.findIndex((cart: Cart) => cart.id === id)

      ++response[index].quantity

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
