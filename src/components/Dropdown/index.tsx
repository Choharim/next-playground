import { css, cx } from '@emotion/css'
import { ComponentProps, useEffect } from 'react'

import Provider from './context/Provider'
import Trigger from './Trigger'
import OptionList from './OptionList'
import Flex from '../Flex'
import Option from './Option'
import { CombineType } from '@/shared/types/extendable'
import { RequireOnlyOne } from '@/shared/types/narrow'

export interface OptionData {
  label: string
  value: string
}

interface Props<T = string> extends Omit<ComponentProps<'select'>, 'value'> {
  options: Readonly<Array<OptionData>>
  selectedValue: T
  setSelectedValue: (value: T) => void
}

type DropdownProps = CombineType<
  Props,
  RequireOnlyOne<{ placeholder: string; defaultValue: string }>
>

const Dropdown = ({
  options,
  selectedValue,
  setSelectedValue,
  className,
  children,
  defaultValue,
  ...selectAttributes
}: DropdownProps) => {
  const { placeholder } = selectAttributes

  useEffect(() => {
    if (!!defaultValue) setSelectedValue(String(defaultValue ?? ''))
  }, [defaultValue, setSelectedValue])

  const handleChange = () => {
    /**
     * select element에 value prop을 전달하기 위해서는 onChange를 전달해야 합니다.
     */
  }

  return (
    <Provider
      options={options}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      placeholder={placeholder}
    >
      <Flex
        direction="column"
        className={cx(
          css`
            position: relative;
          `,
          className
        )}
      >
        {children}

        <select
          {...selectAttributes}
          value={selectedValue}
          onChange={handleChange}
          className={css`
            display: none;
          `}
        >
          {!!placeholder && <option>{placeholder}</option>}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Flex>
    </Provider>
  )
}

export default Dropdown

Dropdown.Trigger = Trigger
Dropdown.OptionList = OptionList
Dropdown.Option = Option