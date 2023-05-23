import { ComponentProps, useEffect } from 'react'
import { css } from '@emotion/react'

import TriggerProvider from './context/TriggerProvider'
import OptionProvider from './context/OptionProvider'

import OptionList from './OptionList'
import Flex from '../Flex'
import Option from './Option'

import { CombineType } from '@/shared/types/extendable'
import { RequireOnlyOne } from '@/shared/types/narrow'
import { hiddenElement } from '@/styles/utils/accessibility'
import Trigger from './Trigger'
import Value from './Value'

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
  RequireOnlyOne<Pick<ComponentProps<'select'>, 'placeholder' | 'defaultValue'>>
>

const Dropdown = ({
  options,
  selectedValue,
  setSelectedValue,

  children,
  ...selectAttributes
}: DropdownProps) => {
  const { placeholder, defaultValue } = selectAttributes

  useEffect(() => {
    if (!!defaultValue) {
      setSelectedValue(String(defaultValue ?? ''))
    }
  }, [defaultValue, setSelectedValue])

  const handleChange = () => {
    /**
     * select element에 value prop을 전달하기 위해서는 onChange를 전달해야 합니다.
     */
  }

  return (
    <>
      <TriggerProvider>
        <OptionProvider
          options={options}
          placeholder={placeholder}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        >
          <Flex
            direction="column"
            css={css`
              position: relative;
            `}
          >
            <Trigger>
              <Value />
            </Trigger>
            {children}
          </Flex>
        </OptionProvider>
      </TriggerProvider>

      <select
        {...selectAttributes}
        value={selectedValue}
        onChange={handleChange}
        css={hiddenElement}
      >
        {!!placeholder && <option>{placeholder}</option>}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}

export default Dropdown

Dropdown.OptionList = OptionList
Dropdown.Option = Option
