import { QueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 200,
      useErrorBoundary(error) {
        return ((error as AxiosError).response?.status || 200) >= 500
      },
    },
  },
})
