import React, { ComponentPropsWithoutRef, FormEvent } from 'react'

export type FormData<T extends readonly string[]> = {
  [key in T[number]]: { value?: string }
}

/**
 * @description
 * - fieldNames
 * form 관련 요소에 지정한 name을 배열로 전달합니다.
 */
interface Props<T extends readonly string[]>
  extends Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> {
  onSubmit: (data: FormData<T>) => void
  fieldNames: T
}

const Form = <T extends readonly string[]>({
  children,
  onSubmit,
  fieldNames,
  ...formAttributes
}: Props<T>) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.currentTarget as typeof e.currentTarget & FormData<T>

    const formData = fieldNames.reduce(
      (prev, name) => ({ ...prev, [name]: target[name]?.value }),
      {}
    ) as FormData<T>

    onSubmit(formData)
  }

  return (
    <form {...formAttributes} onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default Form
