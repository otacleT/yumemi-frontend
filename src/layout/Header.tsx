import {css} from '@emotion/react'
import React from 'react'

/**
 * @package
 */

export const Header: React.FC = () => {
  return (
    <header css={container}>
      <h1 css={title}>YUMEMI</h1>
      <p css={subTitle}>都道府県別の総人口推移グラフ</p>
    </header>
  )
}

const container = css`
  position: relative;
  width: 100%;
  padding: 40px 0;
  text-align: center;
  ::after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    height: 4px;
    width: 100%;
    transform: translateY(100%);
    background: linear-gradient(90deg, rgba(65, 164, 253, 1) 0%, rgba(103, 126, 250, 1) 100%);
    content: '';
  }
  @media (max-width: 640px) {
    padding: 24px 0;
  }
`

const title = css`
  font-size: 36px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
`

const subTitle = css`
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`
