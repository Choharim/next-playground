import { CSSProperties, ElementType, forwardRef } from 'react'
import {
  PolymorphicComponentProps,
  PolymorphicForwardRefComponent,
  PolymorphicRef,
} from '@/shared/types/polymorphic'
import getStyle from './getStyle'

const DEFAULT_ELEMENT = 'div'

export interface FlexProps {
  direction: CSSProperties['flexDirection']
  justify: CSSProperties['justifyContent']
  align: CSSProperties['alignItems']
  gap: CSSProperties['gap']
}

type Props<E extends ElementType> = PolymorphicComponentProps<
  E,
  Partial<FlexProps>
>

const Flex: FlexComponent = <E extends ElementType = typeof DEFAULT_ELEMENT>(
  {
    as,
    children,
    direction = 'row',
    justify = 'flex-start',
    align = 'center',
    gap,
    className,
    ...restProps
  }: Props<E>,
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

/**
 * @description
 * forwardRef로 인해 컴포넌트의 타입이 추론되지 않아
 * 타입 단언을 해줍니다.
 */
type FlexComponent = PolymorphicForwardRefComponent<Partial<FlexProps>>

export default forwardRef(Flex) as FlexComponent
