import { forwardRef } from 'react'

import Text, { TextProps } from '../Text'
import { CombineType } from '@/shared/types/extendable'
import { useLabelTheme } from './useLabelTheme'

export type LabelThemeProps = {
  isRequired: boolean
}

type Props = CombineType<
  Omit<TextProps<'label'>, 'as'>,
  Partial<LabelThemeProps>
>

const Label = forwardRef<HTMLLabelElement, Props>(
  ({ children, isRequired = false, className, ...labelAttributes }, ref) => {
    const theme = useLabelTheme({ isRequired }, className)

    return (
      <Text {...labelAttributes} className={theme} as="label" ref={ref}>
        {children}
      </Text>
    )
  }
)

export default Label

Label.displayName = 'Label'
