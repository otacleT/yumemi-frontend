import type {GetStaticProps, NextPage} from 'next'

import {Home} from '@/component/Home'
import type {PrefectureType} from '@/type/PrefectureType'

type PrefecturesRes = {
  message: string
  result: PrefectureType[]
}

type HomePageProps = {
  prefectures: PrefectureType[]
  error?: string
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY || '',
      },
    })

    if (!res.ok) {
      throw new Error(`API response error with status code: ${res.status}`)
    }

    const data = (await res.json()) as PrefecturesRes
    const prefectures = data.result.map((prefecture) => {
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
  } catch (error) {
    return {
      props: {
        prefectures: [],
        error: JSON.stringify(error),
      },
    }
  }
}

const HomePage: NextPage<HomePageProps> = ({error, prefectures}) => {
  console.info(error)
  if (error) {
    return <div>都道府県一覧の取得に失敗しました。</div>
  }
  return <Home prefectures={prefectures} />
}

export default HomePage
