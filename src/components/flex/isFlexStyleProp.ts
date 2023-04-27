import { FlexStyleProps } from '.'

const PROP_KEYS: Array<keyof FlexStyleProps> = [
  'align',
  'direction',
  'gap',
  'justify',
]

const isFlexStyleProp = (prop: string) => {
  return PROP_KEYS.some((key) => key === prop)
}

export default isFlexStyleProp
