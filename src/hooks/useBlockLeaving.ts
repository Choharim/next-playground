import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type ConfirmCallback = () => Promise<void>

export const useBlockLeaving = (confirmCallback?: ConfirmCallback) => {
  const router = useRouter()
  const [block, setBlock] = useState(true)

  useEffect(() => {
    const routeChangeStart = () => {
      if (block) {
        /**
         * @note popstate 이벤트는 취소가 불가능해, 화면 이동은 막아지지만 history stack은 제거된다.
         * 이러한 이유로 router.asPath와 window.location.pathname가 달라지게 되므로
         * window.history push를 사용해 router.asPath와 동일하게 맞춰주고 올바르게 history stack을 유지한다.
         */
        if (router.asPath !== window.location.pathname) {
          window.history.pushState('', '', router.asPath)
        }

        router.events.emit('routeChangeError')
        throw 'Abort route change. Please ignore this error.'
      }
    }

    router.events.on('routeChangeStart', routeChangeStart)
    return () => {
      router.events.off('routeChangeStart', routeChangeStart)
    }
  }, [router, block])

  useEffect(() => {
    const routeChangeError = confirmCallback ?? (() => null)

    router.events.on('routeChangeError', routeChangeError)
    return () => {
      router.events.off('routeChangeError', routeChangeError)
    }
  }, [router, confirmCallback])

  const unBlock = () => {
    setBlock(false)
    router.back()
  }

  return { unBlock }
}
