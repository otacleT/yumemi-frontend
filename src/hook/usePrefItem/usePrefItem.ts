import type {Dispatch, SetStateAction} from 'react'
import {useCallback, useState} from 'react'

import type {ChartData} from '@/type/ChartData'

type Data = {
  year: number
  value: number
}

/**
 * @package
 */
export const usePrefItem = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = useCallback(
    async (
      prefCode: number,
      prefName: string,
      setChartData: Dispatch<SetStateAction<ChartData[]>>,
      setStartYear: Dispatch<SetStateAction<number>>
    ) => {
      if (isChecked) {
        setChartData((prev) => {
          return prev.filter((item) => {
            return item.name !== prefName
          })
        })
      } else {
        setIsLoading(true)
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
        setStartYear(data.result.data[0].data[0].year)
      }
      setIsChecked((prev) => {
        return !prev
      })
      setIsLoading(false)
    },
    [isChecked]
  )

  return {isChecked, isLoading, handleChange}
}
