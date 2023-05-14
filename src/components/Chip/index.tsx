import { ElementType, forwardRef, useMemo } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Typo, { TypoStyle } from '../Typo'
import Flex, { FlexProps } from '../Flex'

import { PolymorphicRef } from '@/shared/types/polymorphic'
import { CombineType } from '@/shared/types/extendable'
import getSize from './utils/getSize'
import getVariety from './utils/getVariety'

const DEFAULT_TAG: ElementTag = 'div'

type ElementTag = Extract<ElementType, 'div' | 'label'>

type Variety = 'outline' | 'fill'
type Size = 'small' | 'medium'
export interface ChipStyle {
  variety: Variety
  size: Size
  clickable: boolean
  typoVariety: TypoStyle['variety']
}

export type ChipProps<E extends ElementTag> = CombineType<
  FlexProps<E>,
  Partial<ChipStyle>
>

const Chip = forwardRef(
  <E extends ElementTag>(
    {
      as = DEFAULT_TAG,

      clickable,
      variety = 'outline',
      size = 'medium',
      typoVariety = 'body_1',

      children,
      ...attributes
    }: ChipProps<E>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const { onClick } = attributes
    const hasClickHandler = typeof onClick === 'function'

    const styles = useMemo(
      () => ({ variety, size, clickable: clickable || hasClickHandler }),
      [variety, size, clickable, hasClickHandler]
    )

    return (
      <ChipWrapper
        align="center"
        justify="center"
        {...attributes}
        {...styles}
        ref={forwardRef}
        as={as}
      >
        <Typo wrap="nowrap" variety={typoVariety} color="inherit">
          {children}
        </Typo>
      </ChipWrapper>
    )
  }
)

/**
 * @description
 * forwardRef에 제네릭을 적용하면 prop 타입이 추론되지 않아
 * 타입 단언을 합니다.
 */
export default Chip as <E extends ElementTag>(
  props: ChipProps<E> & { ref?: PolymorphicRef<E> }
) => ReturnType<typeof Chip>

Chip.displayName = 'Chip'

const ChipWrapper = styled(Flex)<Omit<ChipStyle, 'typoVariety'>>`
  border-radius: 16px;
  width: fit-content;

  ${({ size }) => getSize(size)};
  ${({ theme, variety }) => getVariety({ status: 'default', variety }, theme)};

  ${({ clickable }) =>
    clickable
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: default;
          pointer-events: none;
        `}
`
