/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {FC} from 'react'

/**
 * @package
 */
export const Header: FC = () => {
  return (
    <header css={section}>
      <div css={container}>
        <h1 css={title}>
          YUMEMI
          <br />
          <span>都道府県別の総人口推移グラフ</span>
        </h1>
      </div>
    </header>
  )
}

const section = css`
  width: 100%;
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 8px;
    background: linear-gradient(#41a4fd, transparent);
  }
`
const container = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`
const title = css`
  font-size: 36px;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.1em;
  line-height: 1.1;
  padding: 25px 0;
  span {
    font-size: 22px;
    font-weight: 700;
    padding-top: 5px;
  }
`
