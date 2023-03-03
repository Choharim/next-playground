import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { Category, Product } from '@/domain/product/type'
import { getCategories, getProduct } from '@/services/axios/product'
import { Payload } from '@/services/axios/product/type'
import { productKey } from './key'

export const useCategories = (
  options?: Omit<UseQueryOptions<Array<Category>>, 'queryKey' | 'queryFn'>
) => {
  return useQuery(productKey.categories(), getCategories, options)
}

export const useProduct = (
  payload: Payload['getProduct'],
  options?: Omit<UseQueryOptions<Product>, 'queryKey' | 'queryFn'>
) => {
  return useQuery(
    productKey.detail(payload),
    () => getProduct(payload),
    options
  )
}
