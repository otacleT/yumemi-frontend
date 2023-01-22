/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {FC} from 'react'
import {useState} from 'react'

type Prefecture = {
  prefCode: number
  prefName: string
}

/**
 * @package
 */
export const Button: FC<Prefecture> = (props) => {
  const {prefName} = props
  const [isChecked, setIsChecked] = useState(false)

  return (
    <label css={label(isChecked)}>
      <input
        css={check}
        type='checkbox'
        checked={isChecked}
        onChange={() => {
          return setIsChecked(!isChecked)
        }}
      />
      {prefName}
    </label>
  )
}

const label = (isChecked: boolean) => {
  return [
    css`
      font-size: 15px;
      font-weight: bold;
      display: flex;
      width: 110px;
      height: 36px;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #000;
      border-radius: 25px;
      ${isChecked ? 'border: 3px solid rgba(65, 164, 253, 1);' : 'border: 3px solid #d9d9d9;'}
      position: relative;
      cursor: pointer;
      ::before {
        font-size: 15px;
        font-weight: bold;
        content: ${isChecked ? '"✓"' : '"＋"'};
        display: inline-block;
        padding-right: 10px;
        color: ${isChecked ? 'rgba(65, 164, 253, 1)' : '#000'};
      }
    `,
  ]
}
const check = css`
  display: none;
`
