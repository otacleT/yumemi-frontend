import '@/styles/globals.css'

import type {AppProps} from 'next/app'

import {Layout} from '@/layout'

const App = ({Component, pageProps}: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
