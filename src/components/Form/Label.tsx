import { forwardRef } from 'react'

import Typo, { TypoProps } from '../Typo'
import { CombineType } from '@/shared/types/extendable'
import useLabelTheme from './useLabelTheme'

export type LabelThemeProps = {
  isRequired: boolean
}

type Props = CombineType<
  Omit<TypoProps<'label'>, 'as'>,
  Partial<LabelThemeProps>
>

const Label = forwardRef<HTMLLabelElement, Props>(
  ({ children, isRequired = false, className, ...labelAttributes }, ref) => {
    const theme = useLabelTheme({ isRequired }, className)

    return (
      <Typo {...labelAttributes} className={theme} as="label" ref={ref}>
        {children}
      </Typo>
    )
  }
)

export default Label

Label.displayName = 'Label'
