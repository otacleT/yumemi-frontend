import {Footer} from '@/layout/Footer'
import {Header} from '@/layout/Header'

/**
 * @package
 */

export const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
