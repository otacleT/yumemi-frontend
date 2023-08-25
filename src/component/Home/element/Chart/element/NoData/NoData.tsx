import {css} from '@emotion/react'
import React from 'react'

/**
 * @package
 */

export const NoData: React.FC = () => {
  return (
    <div css={background}>
      <p css={text}>都道府県を選択してください</p>
    </div>
  )
}

const background = css`
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: linear-gradient(90deg, rgba(65, 164, 253, 1) 0%, rgba(103, 126, 250, 1) 100%);
  aspect-ratio: 16 / 9;
`

const text = css`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`
