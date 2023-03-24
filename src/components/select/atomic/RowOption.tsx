import { OptionHTMLAttributes } from 'react'

type Props = OptionHTMLAttributes<HTMLOptionElement>

const RowOption = ({ value, children }: Props) => {
  return <option value={value}>{children}</option>
}

export default RowOption
