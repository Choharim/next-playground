import { ElementType, forwardRef } from 'react'

import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@/shared/types/polymorphic'
import { ColorKey, FontKey } from '@/theme/type'
import getTypoTheme from './getTypoTheme'

const DEFAULT_TAG: ElementTag = 'span'

type ElementTag = Extract<
  ElementType,
  'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
>

export type TypoThemeProps = {
  variety: FontKey
  color: ColorKey | 'inherit'
}

export type TypoProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  Partial<TypoThemeProps>
>

const Typo = forwardRef(
  <E extends ElementType>(
    {
      as,
      children,
      className,
      variety = 'body_1',
      color = 'black',
      ...attributes
    }: TypoProps<E | typeof DEFAULT_TAG>,
    ref: PolymorphicRef<E>
  ) => {
    const theme = getTypoTheme({ variety, color }, className)
    const Element = as || DEFAULT_TAG

    return (
      <Element {...attributes} className={theme} ref={ref}>
        {children}
      </Element>
    )
  }
)

/**
 * @description
 * forwardRef에 제네릭을 적용하면 prop 타입이 추론되지 않아
 * 타입 단언을 합니다.
 */
export default Typo as <E extends ElementTag>(
  props: TypoProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Typo>

Typo.displayName = 'Typo'
