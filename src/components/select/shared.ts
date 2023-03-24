import { Dispatch, SetStateAction, useState } from 'react'

type Option = {
  text: string
  value: string
}

/**
 * @note select 컴포넌트 내에서 자식 컴포넌트를 복제하여 props을 추가로 넘겨주기 때문에,
 *       select 컴포넌트 내에서 동일한 props의 경우 이름을 동기화시키기 위해
 *       `SelectBasic` 타입을 이용합니다.
 */
export type SelectBasic = {
  options: Readonly<Option[]>
  isOpen: boolean
}

interface IsOpenState extends Pick<SelectBasic, 'isOpen'> {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
/**
 * @note select 컴포넌트 내에서 자식 컴포넌트를 복제하여 props을 추가로 넘겨주기 때문에,
 *       select 컴포넌트 내에서 동일한 props의 경우 이름을 동기화시키기 위해
 *       `useIsOpenState`hook을 사용합니다.
 */
export const useIsOpenState = (): IsOpenState => {
  const [isOpen, setIsOpen] = useState(false)

  return { isOpen, setIsOpen }
}
