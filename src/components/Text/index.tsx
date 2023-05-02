import { ElementType, forwardRef } from 'react'

import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@/shared/types/polymorphic'
import { ColorKey, FontKey } from '@/theme/type'
import getTextTheme from './getTextTheme'

const DEFAULT_TAG: ElementTag = 'span'

type ElementTag = Extract<
  ElementType,
  'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
>

export type TextThemeProps = {
  variety: FontKey
  color: ColorKey | 'inherit'
}

export type TextProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  Partial<TextThemeProps>
>

const Text = forwardRef(
  <E extends ElementType>(
    {
      as,
      children,
      className,
      variety = 'body_1',
      color = 'black',
      ...attributes
    }: TextProps<E | typeof DEFAULT_TAG>,
    ref: PolymorphicRef<E>
  ) => {
    const theme = getTextTheme({ variety, color }, className)
    const Element = as || DEFAULT_TAG

    return (
      <Element {...attributes} className={theme} ref={ref}>
        {children}
      </Element>
    )
  }
)

export default Text as <E extends ElementTag>(
  props: TextProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Text>

Text.displayName = 'Text'
