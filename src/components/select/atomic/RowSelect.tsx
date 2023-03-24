import { ChangeEvent, SelectHTMLAttributes } from 'react'

type Props = SelectHTMLAttributes<HTMLSelectElement>

const RowSelect = ({
  children,
  value = '',
  defaultValue = '',
  ...selectAttributes
}: Props) => {
  /**
   * @note
   * select에 value 속성을 부여하기 위해서는 onChange 함수가 존재해야 합니다.
   */
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    selectAttributes.onChange?.(e)
  }

  return (
    <select
      {...selectAttributes}
      onChange={handleChange}
      value={value || defaultValue}
    >
      {children}
    </select>
  )
}

export default RowSelect
