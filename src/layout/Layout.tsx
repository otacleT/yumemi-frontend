import localFont from '@next/font/local'
import type {ReactElement} from 'react'

import {Footer} from './Footer'
import {Header} from './Header'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const LINESeedJP = localFont({
  display: 'swap',
  src: [
    {
      path: '../font/LINESeedJP_OTF_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/LINESeedJP_OTF_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/LINESeedJP_OTF_Eb.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

/**
 * @package
 */
export const Layout = ({children}: LayoutProps) => {
  return (
    <div className={LINESeedJP.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
