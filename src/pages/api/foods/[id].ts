import type { NextApiRequest, NextApiResponse } from 'next'

import { Food } from '@/domain/food/type'
import { readFoodsFile } from '@/services/db/foods/controller'
import { ERROR_MESSAGE } from '@/services/db/constant'
import { DatabaseError, DatabaseResponse } from '@/services/db/type'
import { FOODS } from '@/services/axios/food/constant'

const isFoodsResponse = (
  contentsJson: object
): contentsJson is Pick<DatabaseResponse, 'foods'> => {
  return FOODS in contentsJson
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Food | DatabaseError>
) {
  try {
    if (req.method === 'GET') {
      const { id } = req.query

      const contents = await readFoodsFile()

      const contentsJson = JSON.parse(contents)

      if (isFoodsResponse(contentsJson)) {
        const response = contentsJson.foods.find((food: Food) => food.id === id)

        if (!response) throw Error

        res.status(200).json(response)
      } else {
        throw Error
      }
    } else {
      throw Error
    }
  } catch (error) {
    res.status(500).json(ERROR_MESSAGE)
  }
}
