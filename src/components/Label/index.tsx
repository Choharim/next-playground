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
  (
    { isRequired = false, className, children, ...labelAttributes },
    forwardRef
  ) => {
    const theme = useLabelTheme({ isRequired }, className)

    return (
      <Typo {...labelAttributes} className={theme} as="label" ref={forwardRef}>
        {children}
      </Typo>
    )
  }
)

export default Label

Label.displayName = 'Label'
