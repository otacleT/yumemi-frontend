/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {FC} from 'react'

/**
 * @package
 */
export const Footer: FC = () => {
  return (
    <footer css={section}>
      <small css={copyright}>© 2023 Taisei Miyabe.</small>
    </footer>
  )
}

const section = css`
  width: 100%;
  padding: 20px;
  text-align: center;
`
const copyright = css`
  font-size: 12px;
  font-weight: 400;
`
