import React from 'react'

import {SelectedPrefProvider} from '@/component/Home/context/SelectedPrefContext'
import {Chart} from '@/component/Home/element/Chart'
import {Prefectures} from '@/component/Home/element/Prefectures'
import type {PrefectureType} from '@/type/PrefectureType'

type HomeProps = {
  prefectures: PrefectureType[]
}

/**
 * @package
 */
export const Home: React.FC<HomeProps> = ({prefectures}) => {
  return (
    <section className='mx-auto w-full max-w-5xl px-5'>
      <h2>都道府県一覧</h2>
      <SelectedPrefProvider>
        <div className='flex justify-between'>
          <Prefectures prefectures={prefectures} />
          <Chart />
        </div>
      </SelectedPrefProvider>
    </section>
  )
}
