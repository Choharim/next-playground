import styled, { CSSObject } from '@emotion/styled'
import { Theme, css } from '@emotion/react'
import { ComponentProps } from 'react'

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

interface Props extends ComponentProps<'button'> {
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

const COLOR_STYLE: Record<ThemeColor, (theme: Theme) => CSSObject> = {
  primary: (theme: Theme) => ({
    backgroundColor: theme.color.primary100,
    color: theme.color.white,
  }),
  secondary: (theme: Theme) => ({
    backgroundColor: theme.color.primary400,
    color: theme.color.white,
  }),
  normal: (theme: Theme) => ({
    backgroundColor: theme.color.grey200,
    color: theme.color.grey900,
  }),
}

const CustomButton = styled.button<{
  themeColor?: ThemeColor
  shape: Shape
}>`
  padding: 8px 16px;
  border-radius: 24px;
  width: fit-content;

  ${({ shape, themeColor, theme }) =>
    shape === 'contain'
      ? css`
          ${!!themeColor && COLOR_STYLE[themeColor](theme)}
        `
      : css`
          &:hover {
            ${COLOR_STYLE['normal'](theme)}
          }
        `};

  &:disabled {
    ${({ theme }) => css`
      background-color: ${theme.color.grey300};
      color: ${theme.color.grey600};
    `}
  }
`
