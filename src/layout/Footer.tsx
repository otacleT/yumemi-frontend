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
  @media screen and (max-width: 520px) {
    padding: 15px 10px;
  }
`
const copyright = css`
  font-size: 12px;
  font-weight: 400;
  @media screen and (max-width: 520px) {
    font-size: 11px;
  }
`
