import { useEffect } from 'react'

type Props = {
  onCallback: IntersectionObserverCallback
  options?: IntersectionObserverInit
  target: HTMLElement | null
}

const useIntersectionObserver = ({ target, onCallback, options }: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onCallback, options)

    target && observer.observe(target)

    return () => {
      target && observer.unobserve(target)
    }
  }, [onCallback, options, target])
}

export default useIntersectionObserver
