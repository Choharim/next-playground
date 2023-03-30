import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { Food } from '@/domain/food/type'
import { getFood, getFoods } from '@/services/axios/food'
import { foodsKey } from './key'
import { Payload } from '@/services/axios/food/type'

export const useFoodsQuery = (
  options?: Omit<UseQueryOptions<Array<Food>, Error>, 'queryKey' | 'queryFn'>
) => {
  return useQuery(foodsKey['lists'](), getFoods, options)
}

export const useFoodQuery = (
  payload: Payload['getFood'],
  options?: Omit<UseQueryOptions<Food, Error>, 'queryKey' | 'queryFn'>
) => {
  return useQuery(foodsKey['detail'](payload), () => getFood(payload), options)
}
