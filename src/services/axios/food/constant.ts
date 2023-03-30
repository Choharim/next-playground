import { MainField, APIPath } from './type'

export const FOODS: MainField = 'foods'

export const API_PATH: { [key in MainField]: APIPath } = {
  foods: '/foods',
}
