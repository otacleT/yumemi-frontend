import {css} from '@emotion/react'
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
    <section css={container}>
      <h2 css={sectionTitle}>都道府県一覧</h2>
      <SelectedPrefDataProvider>
        <StartYearProvider>
          <div css={wrapper}>
            <Prefectures prefectures={prefectures} />
            <Chart />
          </div>
        </StartYearProvider>
      </SelectedPrefDataProvider>
    </section>
  )
}

const container = css`
  width: 100%;
  max-width: 1280px;
  margin: 80px auto;
  padding: 0 20px;
  @media (max-width: 768px) {
    margin: 40px auto;
  }
`

const sectionTitle = css`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const wrapper = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  gap: 28px 0;
`
