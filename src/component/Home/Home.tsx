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
    <section className='mx-auto w-full max-w-7xl md:px-5 my-20 px-4'>
      <h2 className='text-xl font-bold'>都道府県一覧</h2>
      <SelectedPrefDataProvider>
        <StartYearProvider>
          <div className='w-full flex-wrap flex justify-between gap-y-7 items-center mt-7'>
            <Prefectures prefectures={prefectures} />
            <Chart />
          </div>
        </StartYearProvider>
      </SelectedPrefDataProvider>
    </section>
  )
}
