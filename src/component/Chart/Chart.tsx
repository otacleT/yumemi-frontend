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
      <div css={chart}>
        {chartData.length === 0 ? (
          <div css={noData}>
            <p>都道府県を選択してください</p>
          </div>
        ) : (
          <HighchartsReact highcharts={Highcharts} options={options} />
        )}
      </div>
    </div>
  )
}

const chart = css`
  width: 100%;
`
const noData = css`
  width: 100%;
  height: 0;
  padding-top: 65%;
  background-image: linear-gradient(90deg, #41a4fd, #677efa);
  border-radius: 10px;
  position: relative;
  p {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
