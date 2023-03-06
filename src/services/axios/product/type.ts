import { Category, Product } from '@/domain/product/type'

export type APIMainPath = 'products'

export type APISubPath = 'categories'

export type APIPath = `/${APIMainPath}` | `/${APIMainPath}/${APISubPath}`

export type LimitList = {
  skip: number
  // 가져오는 갯수를 나타냅니다.
  limit: number
}

export type ProductList = {
  products: Array<Product>
  total: number
} & LimitList

type Fiter = { category: Category; q: string }

export type Payload = {
  getProducts: LimitList & Partial<Fiter>
  getProduct: {
    id: Product['id']
  }
}
