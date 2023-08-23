import {Noto_Sans_JP} from 'next/font/google'

import {Footer} from '@/layout/Footer'
import {Header} from '@/layout/Header'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700', '800'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

/**
 * @package
 */

export const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={`${notoSansJP.variable} font-sans`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
