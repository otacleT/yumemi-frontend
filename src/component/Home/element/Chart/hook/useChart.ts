import {useMemo, useState} from 'react'

import {useSelectedPref} from '@/component/Home/context/SelectedPrefDataContext'
import {useStartYear} from '@/component/Home/context/StartYearContext'
import {prefColors} from '@/lib/prefColors'
import type {DisplayDataType} from '@/type/DisplayDataType'

export const useChart = () => {
  const [dataType, setDataType] = useState<DisplayDataType>('totalPopulation')
  const selectedPrefData = useSelectedPref()
  const {startYear} = useStartYear()
  const options = useMemo(() => {
    return {
      chart: {
        type: 'line',
        height: '65%',
        style: {
          fontFamily: 'Noto Sans JP',
        },
      },
      title: {
        text: undefined,
      },
      subtitle: {
        text: '出典：RESAS（地域経済分析システム）',
        align: 'right',
      },
      xAxis: {
        title: {
          text: '年度',
          align: 'high',
        },
      },
      yAxis: {
        title: {
          text: '人口数',
          align: 'high',
          textAlign: 'high',
          reserveSpace: false,
          rotation: 0,
          y: -10,
        },
      },
      plotOptions: {
        series: {
          marker: {
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: undefined,
            radius: 5,
          },
          pointInterval: 5,
          pointStart: startYear,
        },
      },
      series: selectedPrefData.map((data) => {
        return {
          name: data.prefName,
          data: [...data.data[dataType]],
          color: prefColors[data.prefName],
        }
      }),
    }
  }, [selectedPrefData, dataType, startYear])

  return {
    options,
    setDataType,
    dataType,
    selectedPrefData,
  }
}
