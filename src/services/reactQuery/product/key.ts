import { Payload } from '@/services/axios/product/type'

export const productKey = {
  all: [{ scope: 'product' }] as const,

  details: () => [{ ...productKey.all[0], entity: 'detail' }] as const,
  detail: (payload: Payload['getProduct']) =>
    [{ ...productKey.details()[0], ...payload }] as const,

  lists: () => [{ ...productKey.all[0], entity: 'list' }] as const,
  list: (payload: Payload['getProducts']) =>
    [{ ...productKey.lists()[0], ...payload }] as const,

  categories: () => [{ ...productKey.all[0], entity: 'category' }] as const,
}
