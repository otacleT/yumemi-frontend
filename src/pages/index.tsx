/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import type {GetStaticProps, NextPage} from 'next'
import {useMemo, useState} from 'react'

import {Button} from '@/component/Button'
import type {ChartData} from '@/type/ChartData'
import type {Prefecture} from '@/type/Prefecture'
import type {Prefectures} from '@/type/Prefectures'

export const getStaticProps: GetStaticProps = async () => {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.append('X-API-KEY', process.env.RESAS_API_KEY ?? '')
  const res = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    method: 'GET',
    headers: requestHeaders,
  })
  const data = await res.json()
  const prefectures = data.result.map((prefecture: Prefecture) => {
    return {
      prefCode: prefecture.prefCode,
      prefName: prefecture.prefName,
    }
  })
  return {
    props: {
      prefectures,
    },
  }
}

const Home: NextPage<Prefectures> = (props) => {
  const {prefectures} = props
  const [chartData, setChartData] = useState<ChartData[]>([])
  const options = useMemo(() => {
    return {
      chart: {
        type: 'line',
      },
      title: {
        text: undefined,
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
    <div css={[container, wrapper]}>
      <div>
        <h2 css={title}>都道府県一覧</h2>
        <div css={leftWrapper}>
          {prefectures.map(({prefCode, prefName}: Prefecture) => {
            return (
              <Button
                key={prefCode}
                prefName={prefName}
                prefCode={prefCode}
                setChartData={setChartData}
              />
            )
          })}
        </div>
      </div>
      <div css={chart}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}

export default Home

const container = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`
const wrapper = css`
  display: grid;
  gap: 10px;
  grid-template-columns: minmax(340px, 2fr) 3fr;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const chart = css`
  width: 100%;
`
const title = css`
  font-size: 20px;
  font-weight: bold;
`
const leftWrapper = css`
  width: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  place-items: center;
  padding-top: 20px;
`
