import { useEffect } from 'react'

type Props = {
  onCallback: IntersectionObserverCallback
  options?: IntersectionObserverInit
  target: HTMLElement | null
}

const useIntersectionObserver = ({ target, onCallback, options }: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onCallback, options)

    if (target) observer.observe(target)

    return () => {
      if (target) observer.unobserve(target)
    }
  }, [onCallback, options, target])
}

export default useIntersectionObserver
