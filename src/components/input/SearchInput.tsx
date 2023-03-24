import React, { InputHTMLAttributes } from 'react'

import Form from '../form/Form'
import Input from './Input'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

const SearchInput = ({ children, ...inputAttributes }: Props) => {
  return (
    <Form>
      <Input {...inputAttributes}>{children}</Input>
    </Form>
  )
}

export default React.memo(SearchInput)
