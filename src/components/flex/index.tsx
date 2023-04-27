import { CSSProperties, ElementType, forwardRef } from 'react'
import {
  PolymorphicComponentProps,
  PolymorphicForwardRefComponent,
  PolymorphicRef,
} from '@/shared/types/polymorphic'
import getStyle from './getStyle'

const DEFAULT_ELEMENT = 'div'

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

/**
 * @description
 * forwardRef로 인해 컴포넌트의 타입이 추론되지 않아
 * 타입 단언을 해줍니다.
 */
export type FlexComponent = PolymorphicForwardRefComponent<
  Partial<FlexStyleProps>
>

const Flex: FlexComponent = <E extends ElementType = typeof DEFAULT_ELEMENT>(
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
  forwardRef?: PolymorphicRef<E>
) => {
  const Component = as || DEFAULT_ELEMENT
  const style = getStyle({ direction, justify, align, gap }, className)

  return (
    <Component {...restProps} className={style} ref={forwardRef}>
      {children}
    </Component>
  )
}

export default forwardRef(Flex) as FlexComponent
