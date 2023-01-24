/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {Dispatch, FC, SetStateAction} from 'react'

import {usePrefItem} from '@/hook/PrefItem'
import type {ChartData} from '@/type/ChartData'

type Prefecture = {
  prefCode: number
  prefName: string
  setChartData: Dispatch<SetStateAction<ChartData[]>>
}

/**
 * @package
 */
export const PrefectureItem: FC<Prefecture> = (props) => {
  const {prefCode, prefName, setChartData} = props
  const {handleChange, isChecked} = usePrefItem()
  return (
    <li>
      <label css={label(isChecked)}>
        <input
          css={check}
          type='checkbox'
          checked={isChecked}
          onChange={() => {
            return handleChange(prefCode, prefName, setChartData)
          }}
        />
        {prefName}
      </label>
    </li>
  )
}

const label = (isChecked: boolean) => {
  return [
    css`
      font-size: 15px;
      font-weight: 700;
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
        font-weight: 700;
        content: ${isChecked ? '"✓"' : '"＋"'};
        display: inline-block;
        padding-right: 10px;
        color: ${isChecked ? 'rgba(65, 164, 253, 1)' : '#000'};
      }
      @media screen and (max-width: 520px) {
        font-size: 13px;
        width: 95px;
        height: 34px;
      }
    `,
  ]
}
const check = css`
  display: none;
`
