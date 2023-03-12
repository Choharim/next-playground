import { RefObject, useEffect } from 'react'

type Props = {
  target: RefObject<HTMLDivElement> | null
  callabck: () => void
}
const useClickOutside = ({ target, callabck }: Props) => {
  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!target?.current || target.current.contains(e.target as Node)) {
        return
      }
      callabck()
    }

    addEventListener('click', clickOutside)
    return () => removeEventListener('click', clickOutside)
  }, [target, callabck])
}

export default useClickOutside
