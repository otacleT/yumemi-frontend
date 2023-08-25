import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'

import {Home} from '@/component/Home'
import type {PrefecturesRes} from '@/lib/dto'
import type {PrefectureType} from '@/type/PrefectureType'

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
  return (
    <>
      <Head>
        <title>株式会社ゆめみのフロントエンド技術課題</title>
      </Head>
      {error ? (
        <div className='py-10 text-center'>都道府県一覧の取得に失敗しました。</div>
      ) : (
        <Home prefectures={prefectures} />
      )}
    </>
  )
}

export default HomePage
