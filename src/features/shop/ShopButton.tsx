import styled, { CSSObject } from '@emotion/styled'

import AtomicButton, {
  AtomicButtonProps,
} from '@/components/Button/AtomicButton'
import { THEME } from '@/styles/theme'
import { css } from '@emotion/react'

const THEME_COLOR = ['primary', 'secondary', 'normal'] as const
type ThemeColor = (typeof THEME_COLOR)[number]
type Shape = 'contain' | 'text'
type Variety<T extends Shape> = `${T extends 'contain'
  ? `contain-${ThemeColor}`
  : T}`

const getVariety = (variety: Variety<Shape>) => {
  const [shape, themeColor] = variety.split('-') as [
    Shape,
    ThemeColor | undefined
  ]

  if (shape === 'contain' && !!themeColor && THEME_COLOR.includes(themeColor)) {
    return { shape, themeColor }
  } else if (shape === 'text') {
    return { shape }
  } else {
    throw Error('it is not variety of ShopButton')
  }
}

interface Props extends AtomicButtonProps {
  variety: Variety<Shape>
}

const ShopButton = ({
  children,
  variety,
  disabled,
  ...buttonAttributes
}: Props) => {
  const { shape, themeColor } = getVariety(variety)

  return (
    <CustomButton
      shape={shape}
      themeColor={themeColor}
      disabled={disabled}
      {...buttonAttributes}
    >
      {children}
    </CustomButton>
  )
}

export default ShopButton

const COLOR_STYLE: { [key in ThemeColor]: CSSObject } = {
  primary: {
    backgroundColor: THEME.color.primary100,
    color: THEME.color.white,
  },
  secondary: {
    backgroundColor: THEME.color.primary400,
    color: THEME.color.white,
  },
  normal: {
    backgroundColor: THEME.color.grey200,
    color: THEME.color.grey900,
  },
}

const getStyle = (themeColor: ThemeColor): { [key in Shape]: CSSObject } => ({
  contain: COLOR_STYLE[themeColor],
  text: {
    '&:hover': COLOR_STYLE['normal'],
  },
})

const CustomButton = styled(AtomicButton)<{
  themeColor?: ThemeColor
  shape: Shape
}>`
  padding: 8px 16px;
  border-radius: 24px;
  width: fit-content;
  ${({ theme }) => theme.font.subtitle_3};

  ${({ shape, themeColor }) => !!themeColor && getStyle(themeColor)[shape]};

  &:disabled {
    ${({ theme }) => css`
      background-color: ${theme.color.grey300};
      color: ${theme.color.grey600};
    `}
  }
`
