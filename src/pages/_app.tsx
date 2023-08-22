import '@/styles/globals.css'

import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'

import {Layout} from '@/layout'

// Create a client
const queryClient = new QueryClient()

const App = ({Component, pageProps}: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
