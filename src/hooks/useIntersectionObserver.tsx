import { RefObject, useEffect } from 'react'

type Props = {
  onCallback: IntersectionObserverCallback
  options?: IntersectionObserverInit
  targetRef: RefObject<HTMLElement> | null
}

const useIntersectionObserver = ({ targetRef, onCallback, options }: Props) => {
  useEffect(() => {
    const target = targetRef?.current
    const observer = new IntersectionObserver(onCallback, options)

    if (target) observer.observe(target)

    return () => {
      if (target) observer.unobserve(target)
    }
  }, [onCallback, options, targetRef])
}

export default useIntersectionObserver
