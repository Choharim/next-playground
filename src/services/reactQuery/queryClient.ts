import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /**
       * @description
       * 중복 호출을 줄이기 위해 임의로 20초를 지정합니다.
       */
      staleTime: 1000 * 20,
    },
  },
})
