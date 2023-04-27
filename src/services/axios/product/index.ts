import { AxiosResponse } from 'axios'

import axiosInstance from './instance'
import { Category, Product } from '@/domain/product/type'
import { joinKeyValuePayload, assertField } from '@/shared/utils/object'
import { API_PATH } from './constant'
import { ProductList, Payload } from './type'

export const getProducts = async (payload?: Payload['getProducts']) => {
  let path = API_PATH['products']
  const queries: Payload['getProducts'] = {
    category: payload?.category,
    q: payload?.q,
    limit: payload?.limit || 0,
    skip: payload?.skip || 0,
  }

  for (const key in queries) {
    if (!assertField(queries, key)) continue

    if (key === 'category') {
      if (!!queries['category']) {
        path += `/category/${queries[key]}`
        delete queries['q']
      }

      delete queries['category']
      break
    } else if (key === 'q') {
      if (!!queries['q']) {
        path += `/search`
        delete queries['category']
      } else {
        delete queries['q']
      }
    }
  }

  const query = Object.keys(queries).length
    ? `?${joinKeyValuePayload(queries)}`
    : null

  const response = await axiosInstance.get<
    ProductList,
    AxiosResponse<ProductList>
  >(`${path}${query}`)
  return response.data
}

export const getProduct = async ({ id }: Payload['getProduct']) => {
  const response = await axiosInstance.get<Product, AxiosResponse<Product>>(
    `${API_PATH['products']}/${id}`
  )

  return response.data
}

export const getCategories = async () => {
  const response = await axiosInstance.get<
    Array<Category>,
    AxiosResponse<Array<Category>>
  >(API_PATH['categories'])

  return response.data
}
