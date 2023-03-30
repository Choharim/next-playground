import { FOODS } from '@/services/axios/food/constant'
import { Payload } from '@/services/axios/food/type'

export const foodsKey = {
  all: [{ scope: FOODS }] as const,

  lists: () => [{ ...foodsKey.all[0], entity: 'list' }] as const,

  details: () => [{ ...foodsKey.all[0], entity: 'detail' }] as const,
  detail: (payload: Payload['getFood']) =>
    [{ ...foodsKey.details()[0], ...payload }] as const,
}
