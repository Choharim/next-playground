import { CSSProperties, ElementType, forwardRef } from 'react'

import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@/shared/types/polymorphic'
import getStyle from './getStyle'

const DEFAULT_TAG: ElementTag = 'div'

type ElementTag = Extract<
  ElementType,
  'div' | 'form' | 'section' | 'nav' | 'article' | 'aside' | 'ol' | 'ul'
>

export interface FlexStyleProps {
  direction: CSSProperties['flexDirection']
  justify: CSSProperties['justifyContent']
  align: CSSProperties['alignItems']
  gap: CSSProperties['gap']
}

export type FlexProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  Partial<FlexStyleProps>
>

const Flex = forwardRef(
  <E extends ElementType>(
    {
      as,
      children,
      direction,
      justify,
      align,
      gap,
      className,
      ...restProps
    }: FlexProps<E | typeof DEFAULT_TAG>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const Element = as || DEFAULT_TAG
    const style = getStyle({ direction, justify, align, gap }, className)

    return (
      <Element {...restProps} className={style} ref={forwardRef}>
        {children}
      </Element>
    )
  }
)

export default Flex as <E extends ElementTag>(
  props: FlexProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Flex>

Flex.displayName = 'Flex'
