import { css, cx } from '@emotion/css'
import { CheckboxThemeProps } from '../Checkbox'
import { ClassName } from '@/shared/types/element'
import { useTheme } from '@emotion/react'

const useCheckboxTheme = (
  { isError }: CheckboxThemeProps,
  className: ClassName
) => {
  const theme = useTheme()

  return cx(
    css`
      position: absolute;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 100%;

      appearance: none;
      cursor: inherit;

      &::before,
      ::after {
        position: absolute;
        content: '';
        box-sizing: border-box;
        border-radius: 6px;
      }

      &::before {
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        background-color: ${theme.color.white};

        ${isError
          ? css`
              border: 2px solid ${theme.color.warning};
            `
          : css`
              border: 2px solid ${theme.color.grey300};
            `}
        transition: border-color 0.1s ease, background-color 0.1s ease;
      }
      &:checked::before {
        border-color: ${theme.color.primary300};
        background-color: ${theme.color.primary300};
      }

      &::after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 16px;
        height: 16px;
        background-image: url('https://cdn-icons-png.flaticon.com/512/60/60731.png');
        background-repeat: no-repeat;
        background-size: cover;

        opacity: 0;
        transition: opacity 0.1s ease;
      }
      &:checked::after {
        opacity: 1;
      }
    `,
    className
  )
}

export default useCheckboxTheme
