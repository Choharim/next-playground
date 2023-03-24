import type { NextApiRequest, NextApiResponse } from 'next'

import { Food } from '@/domain/food/type'
import { readFoodsFile } from '@/services/db/foods/controller'
import { ERROR_MESSAGE } from '@/services/db/constant'
import { DatabaseError } from '@/services/db/type'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Food | DatabaseError>
) {
  try {
    if (req.method === 'GET') {
      const query = req.query
      const { id } = query

      const contents = await readFoodsFile()
      const response = JSON.parse(contents)?.foods.find(
        (food: Food) => food.id === id
      )

      if (!response) throw Error

      res.status(200).json(response)
    } else {
      throw Error
    }
  } catch (error) {
    res.status(500).json(ERROR_MESSAGE)
  }
}
