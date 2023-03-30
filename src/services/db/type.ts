import { Cart } from '@/domain/cart/type'
import { Food } from '@/domain/food/type'

export type DatabaseError = {
  error: string
}

export type DatabaseResponse = {
  cart: Cart[]
  foods: Food[]
}
