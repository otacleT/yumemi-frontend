/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {Dispatch, FC, SetStateAction} from 'react'
import {useCallback} from 'react'
import {useState} from 'react'

import type {ChartData} from '@/type/ChartData'

type Prefecture = {
  prefCode: number
  prefName: string
  setChartData: Dispatch<SetStateAction<ChartData[]>>
}

type Data = {
  year: number
  value: number
}

/**
 * @package
 */
export const Button: FC<Prefecture> = (props) => {
  const {prefCode, prefName, setChartData} = props
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = useCallback(async () => {
    if (isChecked) {
      setChartData((prev) => {
        return prev.filter((item) => {
          return item.name !== prefName
        })
      })
    } else {
      const requestHeaders: HeadersInit = new Headers()
      requestHeaders.append('text', prefCode.toString())
      const res = await fetch('/api/population', {
        method: 'GET',
        headers: requestHeaders,
      })
      const data = await res.json()
      const population = data.result.data[0].data.map((item: Data) => {
        return item.value
      })
      setChartData((prev) => {
        return [...prev, {name: prefName, data: population}]
      })
    }
    setIsChecked((prev) => {
      return !prev
    })
  }, [isChecked, prefCode, prefName, setChartData])
  return (
    <label css={label(isChecked)}>
      <input css={check} type='checkbox' checked={isChecked} onChange={handleChange} />
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
