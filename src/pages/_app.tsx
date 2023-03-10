import '@/style/globals.css'

import type {AppProps} from 'next/app'

import {Layout} from '@/layout'

const myApp = ({Component, pageProps}: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default myApp
