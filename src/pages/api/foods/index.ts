import type { NextApiRequest, NextApiResponse } from 'next'

import { Food } from '@/domain/food/type'
import { readFoodsFile } from '@/services/db/foods/controller'
import { DatabaseError } from '@/services/db/type'
import { ERROR_MESSAGE } from '@/services/db/constant'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Food | DatabaseError>
) {
  try {
    const contents = await readFoodsFile()
    const response = JSON.parse(contents)

    if (req.method === 'GET') {
      res.status(200).json(response)
    } else {
      throw Error
    }
  } catch (error) {
    res.status(500).json(ERROR_MESSAGE)
  }
}
