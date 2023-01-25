/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

/**
 * @package
 */
export const NoData = () => {
  return (
    <div css={noData}>
      <p>都道府県を選択してください</p>
    </div>
  )
}

const noData = css`
  width: 100%;
  height: 0;
  padding-top: 65%;
  background-image: linear-gradient(90deg, #41a4fd, #677efa);
  border-radius: 10px;
  position: relative;
  p {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 520px) {
    padding-top: 70%;
    p {
      font-size: 18px;
    }
  }
`
