import { PropsWithChildren } from 'react'

import RadioChip from './RadioChip'
import RadioGroupProvider, { RadioGroupProps } from './context/Provider'
import RadioButton from './RadioButton'

const RadioGroup = ({
  children,
  ...rest
}: PropsWithChildren<RadioGroupProps>) => {
  return <RadioGroupProvider {...rest}>{children}</RadioGroupProvider>
}

export default RadioGroup

RadioGroup.Chip = RadioChip
RadioGroup.Button = RadioButton
