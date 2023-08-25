import {css} from '@emotion/react'
import React from 'react'

/**
 * @package
 */

export const Footer: React.FC = () => {
  return (
    <footer css={container}>
      <small css={text}>@2023 Taisei Miyabe.</small>
    </footer>
  )
}

const container = css`
  width: 100%;
  padding: 30px 0;
  text-align: center;
`

const text = css`
  font-size: 14px;
`
