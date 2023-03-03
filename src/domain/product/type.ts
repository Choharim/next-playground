import { CATEGORIES } from './constant'

export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  CATEGORIES: Category
  thumbnail: string
  images: Array<string>
}

export type Category = (typeof CATEGORIES)[number]
