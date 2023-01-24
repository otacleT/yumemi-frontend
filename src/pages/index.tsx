/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {GetStaticProps, NextPage} from 'next'
import {useState} from 'react'

import {Chart} from '@/component/Chart'
import {PrefectureList} from '@/component/PrefectureList'
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

  return (
    <section css={[container, wrapper]}>
      <PrefectureList prefectures={prefectures} setChartData={setChartData} />
      <Chart chartData={chartData} />
    </section>
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
  gap: 20px;
  grid-template-columns: minmax(340px, 2fr) 3fr;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
