import { ElementType, forwardRef } from 'react'

import Typo, { TypoProps, TypoThemeProps } from '../Typo'

import useChipTheme from './hooks/useChipTheme'
import { PolymorphicRef } from '@/shared/types/polymorphic'
import { CombineType } from '@/shared/types/extendable'

const DEFAULT_TAG: ElementTag = 'span'
type ElementTag = Extract<ElementType, 'span' | 'label'>

type Variety = 'outline' | 'fill'
type Size = 'small' | 'medium'
export interface ChipThemeProps {
  variety: Variety
  size: Size
  clickable: boolean
}

type CustomTypoProps<E extends ElementTag> = Omit<
  TypoProps<E>,
  keyof TypoThemeProps
> & { typoVariety?: TypoThemeProps['variety'] }

export type ChipProps<E extends ElementTag> = CombineType<
  CustomTypoProps<E>,
  Partial<ChipThemeProps>
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
    const theme = useChipTheme({
      variety,
      size,
      clickable: clickable || typeof onClick === 'function',
    })

    return (
      <Typo
        {...attributes}
        ref={forwardRef}
        as={as}
        css={theme}
        variety={typoVariety}
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
