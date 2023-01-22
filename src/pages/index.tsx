import type {GetStaticProps, NextPage} from 'next'

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
  console.info(prefectures)
  return <div></div>
}

export default Home
