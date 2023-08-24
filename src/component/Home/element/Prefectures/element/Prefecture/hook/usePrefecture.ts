import {useCallback, useState} from 'react'

import {useSelectedPrefDispatch} from '@/component/Home/context/SelectedPrefDataContext'
import {useStartYear} from '@/component/Home/context/StartYearContext'
import type {PopulationRes} from '@/lib/dto'
import type {PrefectureType} from '@/type/PrefectureType'

export const usePrefecture = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {setStartYear} = useStartYear()
  const dispatch = useSelectedPrefDispatch()

  const mapPopulationData = useCallback(
    (prefData: PopulationRes) => ({
      totalPopulation: prefData.result.data[0].data.map((t) => t.value),
      youthPopulation: prefData.result.data[1].data.map((t) => t.value),
      workingAgePopulation: prefData.result.data[2].data.map((t) => t.value),
      elderlyPopulation: prefData.result.data[3].data.map((t) => t.value),
    }),
    []
  )

  const handleSelect = useCallback(
    async ({prefCode, prefName}: PrefectureType) => {
      if (!dispatch) {
        return
      }
      if (isChecked) {
        dispatch({
          type: 'deleted',
          prefCode,
        })
        setIsChecked(false)
      } else {
        try {
          setIsLoading(true)
          const res = await fetch(`/api/population?prefCode=${prefCode}`)
          if (!res.ok) {
            throw new Error(`Failed to fetch with status ${res.status}`)
          }
          const prefData: PopulationRes = await res.json()
          setStartYear(prefData.result.data[0].data[0].year)
          const mappedData = mapPopulationData(prefData)
          dispatch({
            type: 'added',
            data: {prefName, prefCode, data: mappedData},
          })
          setIsChecked(true)
        } catch (error) {
          window.alert('データの取得に失敗しました😥')
        } finally {
          setIsLoading(false)
        }
      }
    },
    [dispatch, isChecked, mapPopulationData, setStartYear]
  )

  return {
    handleSelect,
    isChecked,
    isLoading,
  }
}
