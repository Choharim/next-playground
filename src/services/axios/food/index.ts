import { AxiosResponse } from 'axios'

import axiosInstance from './instance'
import { Food } from '@/domain/food/type'
import { API_PATH } from './constant'
import { DatabaseResponse } from '@/services/db/type'
import { Payload } from './type'

export const getFoods = async () => {
  const response = await axiosInstance.get<
    Pick<DatabaseResponse, 'foods'>,
    AxiosResponse<Pick<DatabaseResponse, 'foods'>>
  >(`${API_PATH['foods']}`)

  return response.data.foods
}

export const getFood = async ({ id }: Payload['getFood']) => {
  const response = await axiosInstance.get<Food, AxiosResponse<Food>>(
    `${API_PATH['foods']}/${id}`
  )

  return response.data
}
