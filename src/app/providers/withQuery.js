import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'

const queryClient = new QueryClient()
export const withQuery = (component) => () => {
  return (
    <QueryClientProvider client={ queryClient }>
      { component() }
    </QueryClientProvider>
  )
}


