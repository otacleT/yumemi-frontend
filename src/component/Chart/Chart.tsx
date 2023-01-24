/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import type {FC} from 'react'
import {useMemo} from 'react'

import type {ChartData} from '@/type/ChartData'

type Props = {
  chartData: ChartData[]
}

/**
 * @package
 */
export const Chart: FC<Props> = (props) => {
  const {chartData} = props
  const options = useMemo(() => {
    return {
      chart: {
        type: 'line',
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
        },
      },
      yAxis: {
        title: {
          text: '人口数',
        },
      },
      plotOptions: {
        column: {
          pointStart: 100000,
          pointInterval: 100000,
        },
        line: {
          pointInterval: 5,
          pointStart: 1980,
        },
      },
      series: chartData.map((data: ChartData) => {
        return {
          name: data.name,
          data: [...data.data],
        }
      }),
    }
  }, [chartData])
  return (
    <div css={chart}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

const chart = css`
  width: 100%;
`
