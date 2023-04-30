import { ColorKey } from '@/theme/type'

export type Variety = 'outline' | 'contain' | 'text'

export type Size = 'small' | 'medium' | 'large'

export interface ButtonTheme {
  variety: Variety
  color: ColorKey
  size: Size
}
