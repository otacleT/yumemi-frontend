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
    <section className='mx-auto my-10 w-full max-w-7xl px-4 md:my-20 md:px-5'>
      <h2 className='text-base font-bold md:text-xl'>都道府県一覧</h2>
      <SelectedPrefDataProvider>
        <StartYearProvider>
          <div className='mt-7 flex w-full flex-wrap items-center justify-between gap-y-7'>
            <Prefectures prefectures={prefectures} />
            <Chart />
          </div>
        </StartYearProvider>
      </SelectedPrefDataProvider>
    </section>
  )
}
