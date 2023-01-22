/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {Dispatch, FC, SetStateAction} from 'react'
import {useState} from 'react'

import type {ChartData} from '@/type/ChartData'

type Prefecture = {
  prefCode: number
  prefName: string
  setChartData: Dispatch<SetStateAction<ChartData[]>>
}

/**
 * @package
 */
export const Button: FC<Prefecture> = (props) => {
  const {prefName, setChartData} = props
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = async (name: string) => {
    if (isChecked) {
      setChartData((prev) => {
        return prev.filter((item) => {
          return item.name !== name ? item : null
        })
      })
    } else {
      setChartData((prev) => {
        return [...prev, {name: name, data: [0, 1, 2, 3, 4, 5]}]
      })
    }
    setIsChecked(!isChecked)
  }
  return (
    <label css={label(isChecked)}>
      <input
        css={check}
        type='checkbox'
        checked={isChecked}
        onChange={() => {
          return handleChange(prefName)
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
