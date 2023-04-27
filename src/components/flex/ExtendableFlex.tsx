import React, { ElementType, forwardRef } from 'react'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'

import Flex, { FlexComponent, FlexProps } from '.'
import { PolymorphicRef } from '@/shared/types/polymorphic'
import isFlexStyleProp from './isFlexStyleProp'

const ExtendableFlex = <E extends ElementType>(
  { children, ...props }: FlexProps<E>,
  forwardRef: PolymorphicRef<E>
) => {
  return (
    <CustomFlex {...props} ref={forwardRef}>
      {children}
    </CustomFlex>
  )
}

export default forwardRef(ExtendableFlex) as FlexComponent

/**
 * @description
 * ExtendableFlex 컴포넌트를 확장해 커스텀 Prop을 넘길 때 해당 DOM에 존재하지 않는 속성이라는 에러가 발생합니다.
 * 비표준 속성을 필터링하기 위해 shouldForwardProp를 사용합니다.
 */
const CustomFlex = styled(Flex, {
  shouldForwardProp: (prop) => isPropValid(prop) || isFlexStyleProp(prop),
})``
