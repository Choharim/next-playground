import { ComponentProps } from 'react'
import Input from '..'
import { css, useTheme } from '@emotion/react'

const useInputTheme = ({
  isError,
  disabled,
}: Pick<ComponentProps<typeof Input>, 'isError' | 'disabled'>) => {
  const theme = useTheme()

  return css`
    padding: 12px;
    height: 48px;
    border-radius: 4px;
    cursor: text;

    ${disabled &&
    css`
      background-color: ${theme.color.grey100};
      cursor: default;
    `}

    ${isError
      ? css`
          border: 1px solid ${theme.color.warning};
        `
      : css`
          border: 1px solid ${theme.color.grey300};

          &:focus-within {
            border: 1px solid ${theme.color.primary400};
          }
        `}
  `
}

export default useInputTheme
