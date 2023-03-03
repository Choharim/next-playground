import { APIMainPath, APIPath, APISubPath } from './type'

export const API_PATH: { [key in APIMainPath | APISubPath]: APIPath } = {
  products: '/products',
  categories: '/products/categories',
}
