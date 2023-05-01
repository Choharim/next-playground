export type Variety = 'outline' | 'contain' | 'text'

export type Size = 'small' | 'medium' | 'large'

export interface ButtonTheme {
  variety: Variety
  size: Size
}
