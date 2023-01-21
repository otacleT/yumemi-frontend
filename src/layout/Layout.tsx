import type {ReactElement} from 'react'

import {Footer} from './Footer'
import {Header} from './Header'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

/**
 * @package
 */
export const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
