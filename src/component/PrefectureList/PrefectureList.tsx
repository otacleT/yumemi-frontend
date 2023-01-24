/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import type {Dispatch, FC, SetStateAction} from 'react'

import type {ChartData} from '@/type/ChartData'
import type {Prefecture} from '@/type/Prefecture'

import {PrefectureItem} from '../PrefectureItem'

type Props = {
  prefectures: Prefecture[]
  setChartData: Dispatch<SetStateAction<ChartData[]>>
}

export const PrefectureList: FC<Props> = (props) => {
  const {prefectures, setChartData} = props
  return (
    <div>
      <h2 css={title}>都道府県一覧</h2>
      <div css={wrapper}>
        <ul css={list}>
          {prefectures.map(({prefCode, prefName}: Prefecture) => {
            return (
              <PrefectureItem
                key={prefCode}
                prefName={prefName}
                prefCode={prefCode}
                setChartData={setChartData}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const title = css`
  font-size: 22px;
  font-weight: 700;
  @media screen and (max-width: 520px) {
    font-size: 18px;
  }
`
const wrapper = css`
  width: 100%;
  @media screen and (max-width: 520px) {
    height: 250px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`
const list = css`
  width: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  place-items: center;
  padding-top: 20px;
  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
  }
`
