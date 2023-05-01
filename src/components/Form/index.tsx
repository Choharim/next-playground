import React, { ComponentPropsWithoutRef, FormEvent } from 'react'

import Flex from '../Flex'

interface Props<T extends DefaultForm>
  extends Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> {
  onSubmitForm?: (data: T) => void
}

/**
 * @note
 * child input에 지정한 name을 key로 전달합니다.
 */
interface DefaultForm {
  [key: string]: { value: string }
}

const Form = <T extends DefaultForm>({
  children,
  onSubmitForm,
  ...formAttributes
}: Props<T>) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.currentTarget as typeof e.currentTarget & T

    onSubmitForm?.(target)
  }

  return (
    <Flex
      as="form"
      direction="column"
      {...formAttributes}
      onSubmit={handleSubmit}
    >
      {children}
    </Flex>
  )
}

export default Form
