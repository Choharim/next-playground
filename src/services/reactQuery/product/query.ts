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

type FetchedOffset = {
  defaultCount: number
  moreCount?: number
}
export const useInfiniteProducts = ({
  defaultCount,
  moreCount,
}: FetchedOffset) => {
  const queryResult = useInfiniteQuery({
    queryKey: productKey.list({ limit: defaultCount, skip: 0 }),
    queryFn: ({ queryKey, pageParam }) => {
      return pageParam
        ? getProducts({ ...queryKey[0], skip: pageParam })
        : getProducts(queryKey[0])
    },
    getNextPageParam: (lastPage) =>
      lastPage.skip + lastPage.limit === lastPage.total
        ? undefined
        : lastPage.skip + (moreCount ?? defaultCount),
  })

  return queryResult
}
