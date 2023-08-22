import React from 'react'

import {SelectedPrefDataProvider} from '@/component/Home/context/SelectedPrefDataContext'
import {StartYearProvider} from '@/component/Home/context/StartYearContext'
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
    <section className='mx-auto w-full max-w-7xl px-5 mt-20'>
      <h2 className='text-xl font-bold'>都道府県一覧</h2>
      <SelectedPrefDataProvider>
        <StartYearProvider>
          <div className='grid gap-5 items-center grid-cols-custom mt-7'>
            <Prefectures prefectures={prefectures} />
            <Chart />
          </div>
        </StartYearProvider>
      </SelectedPrefDataProvider>
    </section>
  )
}
