import {css} from '@emotion/react'
import React from 'react'

import {Prefecture} from '@/component/Home/element/Prefectures/element/Prefecture'
import type {PrefectureType} from '@/type/PrefectureType'

type PrefecturesProps = {
  prefectures: PrefectureType[]
}

/**
 * @package
 */

export const Prefectures: React.FC<PrefecturesProps> = ({prefectures}) => {
  return (
    <ul css={list}>
      {prefectures?.map((prefecture: PrefectureType) => {
        return (
          <Prefecture
            key={prefecture.prefCode}
            prefCode={prefecture.prefCode}
            prefName={prefecture.prefName}
          />
        )
      })}
    </ul>
  )
}

const list = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 4px;
  height: auto;
  overflow-y: auto;
  width: calc(35% - 10px);
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 240px;
  }
`
