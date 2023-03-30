import { Food } from '@/domain/food/type'

export type MainField = 'foods'

export type APIPath = `/${MainField}`

export type Payload = {
  getFood: {
    id: Food['id']
  }
}
