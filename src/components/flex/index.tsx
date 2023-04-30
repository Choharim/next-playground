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

export type FlexProps<E extends ElementTag> = PolymorphicComponentProps<
  E,
  Partial<FlexStyleProps>
>

const Flex = forwardRef(
  <E extends ElementTag = typeof DEFAULT_TAG>(
    {
      as,
      children,
      direction,
      justify,
      align,
      gap,
      className,

      ...restProps
    }: FlexProps<E>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const Element = (as || DEFAULT_TAG) as ElementType
    const style = getStyle({ direction, justify, align, gap }, className)

    return (
      <Element {...restProps} className={style} ref={forwardRef}>
        {children}
      </Element>
    )
  }
)

export default Flex

Flex.displayName = 'Flex'
