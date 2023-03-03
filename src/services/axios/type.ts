export type LimitList = {
  skip: number
  limit: number
}

export type ListResponse<T> = {
  products: Array<T>
  total: number
} & LimitList
