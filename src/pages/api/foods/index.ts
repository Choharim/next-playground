import type { NextApiRequest, NextApiResponse } from 'next'

import { readFoodsFile } from '@/services/db/foods/controller'
import { DatabaseError, DatabaseResponse } from '@/services/db/type'
import { ERROR_MESSAGE } from '@/services/db/constant'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pick<DatabaseResponse, 'foods'> | DatabaseError>
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
