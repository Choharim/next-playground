import { Category, Product } from '@/domain/product/type'
import { LimitList } from '../type'

export type APIMainPath = 'products'

export type APISubPath = 'categories'

export type APIPath = `/${APIMainPath}` | `/${APIMainPath}/${APISubPath}`

export type Payload = {
  getProducts: LimitList & {
    category: Category
    q: string
  }
  getProduct: {
    id: Product['id']
  }
}
