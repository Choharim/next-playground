import {
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'

import { Category, Product } from '@/domain/product/type'
import {
  getCategories,
  getProduct,
  getProducts,
} from '@/services/axios/product'
import { Payload } from '@/services/axios/product/type'
import { productKey } from './key'

export const useCategories = (
  options?: Omit<
    UseQueryOptions<Array<Category>, Error>,
    'queryKey' | 'queryFn'
  >
) => {
  return useQuery(productKey.categories(), getCategories, options)
}

export const useProduct = (
  payload: Payload['getProduct'],
  options?: Omit<UseQueryOptions<Product, Error>, 'queryKey' | 'queryFn'>
) => {
  return useQuery(
    productKey.detail(payload),
    () => getProduct(payload),
    options
  )
}

export const useInfiniteProducts = (payload: Payload['getProducts']) => {
  const queryResult = useInfiniteQuery({
    queryKey: productKey.list(payload),
    queryFn: ({ queryKey, pageParam }) =>
      getProducts({ ...queryKey[0], skip: pageParam ?? 0 }),
    getNextPageParam: (lastPage) =>
      lastPage.skip + lastPage.limit === lastPage.total
        ? undefined
        : lastPage.skip + payload.limit,
    refetchOnWindowFocus: false,
  })

  return queryResult
}
