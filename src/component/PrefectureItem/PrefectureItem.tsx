/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {Dispatch, FC, SetStateAction} from 'react'

import {usePrefItem} from '@/hook/usePrefItem'
import type {ChartData} from '@/type/ChartData'

type Props = {
  prefCode: number
  prefName: string
  setChartData: Dispatch<SetStateAction<ChartData[]>>
  setStartYear: Dispatch<SetStateAction<number>>
}

/**
 * @package
 */
export const PrefectureItem: FC<Props> = (props) => {
  const {prefCode, prefName, setChartData, setStartYear} = props
  const {handleChange, isChecked, isLoading} = usePrefItem()
  return (
    <li>
      <label css={label(isChecked, isLoading)}>
        <input
          css={check}
          type='checkbox'
          checked={isChecked}
          onChange={() => {
            return handleChange(prefCode, prefName, setChartData, setStartYear)
          }}
        />
        {prefName}
      </label>
    </li>
  )
}

const label = (isChecked: boolean, isLoading: boolean) => {
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
      border-radius: 18px;
      ${isChecked ? 'border: 3px solid #41a4fd;' : 'border: 3px solid #d9d9d9;'}
      ${isLoading && 'pointer-events: none;'}
      position: relative;
      cursor: pointer;
      ::before {
        ${isLoading
          ? 'animation: spin 1s linear infinite; display: inline-block; content: ""; border-radius: 50%; width: 13px; height: 13px; border: 2px solid #d9d9d9; border-top-color: #41a4fd; margin-right: 10px;'
          : `font-size: 15px; font-weight: 700; content: ${
              isChecked ? '"✓"' : '"＋"'
            }; display: inline-block; padding-right: 10px; color: ${
              isChecked ? '#41a4fd' : '#000'
            };`}
      }
      @media screen and (max-width: 520px) {
        font-size: 13px;
        width: 95px;
        height: 34px;
        border-radius: 17px;
      }
    `,
  ]
}
const check = css`
  display: none;
`
