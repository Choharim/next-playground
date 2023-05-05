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
  ({ isRequired = false, children, ...labelAttributes }, forwardRef) => {
    const theme = useLabelTheme({ isRequired })

    return (
      <Typo {...labelAttributes} css={theme} as="label" ref={forwardRef}>
        {children}
      </Typo>
    )
  }
)

export default Label

Label.displayName = 'Label'
