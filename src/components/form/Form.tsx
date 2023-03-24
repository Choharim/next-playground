import React, { FormEvent, FormHTMLAttributes } from 'react'

interface Props<T extends DefaultForm>
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children: React.ReactNode
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
    <form {...formAttributes} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default Form
