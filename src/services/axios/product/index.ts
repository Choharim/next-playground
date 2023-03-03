import { Category, Product } from '@/domain/product/type'
import { joinKeyValuePayload, assertField } from '@/utils/obj'
import { AxiosResponse } from 'axios'
import axiosInstance from '../interceptor'
import { ListResponse } from '../type'
import { API_PATH } from './constant'
import { Payload } from './type'

export const getProducts = async (payload?: Payload['getProducts']) => {
  let path = API_PATH['products']
  const queries = { ...payload }

  for (const key in queries) {
    if (!assertField(queries, key)) continue

    if (key === 'category') {
      path += `/category/${queries[key]}`

      delete queries['category']
    } else if (key === 'q') {
      path += `/search`
    }
  }

  const query = Object.keys(queries).length
    ? `?${joinKeyValuePayload(queries)}`
    : null

  const response = await axiosInstance.get<
    ListResponse<Product>,
    AxiosResponse<ListResponse<Product>>
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
