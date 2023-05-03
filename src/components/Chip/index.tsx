import React, { ElementType, forwardRef } from 'react'
import useChipTheme from './hooks/useChipTheme'
import { PolymorphicRef } from '@/shared/types/polymorphic'
import { Size, Variety } from './type'
import Typo, { TypoProps } from '../Typo'
import { CombineType } from '@/shared/types/extendable'

const DEFAULT_TAG: ElementTag = 'span'
type ElementTag = Extract<ElementType, 'span' | 'label'>

export interface ChipThemeProps {
  variety: Variety
  clickable: boolean
  size: Size
}

type CustomTypoProps<E extends ElementTag> = Omit<
  TypoProps<E>,
  'variety' | 'color'
> & { typoVariety?: TypoProps<E>['variety'] }

export type ChipProps<E extends ElementTag> = CombineType<
  CustomTypoProps<E>,
  Partial<ChipThemeProps>
>

const Chip = forwardRef(
  <E extends ElementTag>(
    {
      className,
      children,
      clickable,
      as = DEFAULT_TAG,
      variety = 'outline',
      size = 'medium',
      typoVariety = 'body_1',
      ...attributes
    }: ChipProps<E>,
    forwardRef: PolymorphicRef<E>
  ) => {
    const { onClick } = attributes
    const theme = useChipTheme(
      { variety, clickable: clickable || typeof onClick === 'function', size },
      className
    )

    return (
      <Typo
        {...attributes}
        className={theme}
        variety={typoVariety}
        ref={forwardRef}
        as={as}
      >
        {children}
      </Typo>
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
