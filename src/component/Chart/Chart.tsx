/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import type {FC} from 'react'
import {useMemo} from 'react'

import type {ChartData} from '@/type/ChartData'

import {NoData} from '../NoData'

type Props = {
  chartData: ChartData[]
  startYear: number
}

/**
 * @package
 */
export const Chart: FC<Props> = (props) => {
  const {chartData, startYear} = props
  const options = useMemo(() => {
    return {
      chart: {
        type: 'line',
        height: '65%',
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
        column: {
          pointStart: 100000,
          pointInterval: 100000,
        },
        line: {
          pointInterval: 5,
          pointStart: startYear,
        },
      },
      series: chartData.map((data: ChartData) => {
        return {
          name: data.name,
          data: [...data.data],
        }
      }),
    }
  }, [chartData, startYear])
  return (
    <div css={chart}>
      {chartData.length === 0 ? (
        <NoData />
      ) : (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </div>
  )
}

const chart = css`
  width: 100%;
`
