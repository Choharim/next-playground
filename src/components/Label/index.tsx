import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Typo, { TypoProps } from '../Typo'

import { CombineType } from '@/shared/types/extendable'

type LabelStyle = {
  isRequired: boolean
}

type Props = CombineType<Omit<TypoProps<'label'>, 'as'>, Partial<LabelStyle>>

const Label = forwardRef<HTMLLabelElement, Props>(
  ({ isRequired = false, children, ...labelAttributes }, forwardRef) => {
    return (
      <LabelWrapper
        {...labelAttributes}
        isRequired={isRequired}
        as="label"
        ref={forwardRef}
      >
        {children}
      </LabelWrapper>
    )
  }
)

export default Label

Label.displayName = 'Label'

const LabelWrapper = styled(Typo)<LabelStyle>`
  margin-bottom: 4px;
  &:empty {
    display: none;
  }

  ${({ isRequired, theme }) =>
    isRequired &&
    css`
      &::after {
        content: '*';
        color: ${theme.color.warning};
      }
    `}
`
