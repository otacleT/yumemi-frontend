import {css} from '@emotion/react'
import Image from 'next/image'
import React from 'react'

import {staticPath} from '@/lib/$path'
import type {DisplayDataType} from '@/type/DisplayDataType'

type SelectProps = {
  dataType: DisplayDataType
  setDataType: React.Dispatch<React.SetStateAction<DisplayDataType>>
}

/**
 * @package
 */

export const Select: React.FC<SelectProps> = ({dataType, setDataType}) => {
  return (
    <div css={imgParent}>
      <select
        css={select}
        defaultValue={dataType}
        onChange={(e) => setDataType(e.target.value as DisplayDataType)}
      >
        <option value='totalPopulation'>総人口</option>
        <option value='youthPopulation'>若年人口</option>
        <option value='workingAgePopulation'>生産年齢人口</option>
        <option value='elderlyPopulation'>老年人口</option>
      </select>
      <Image
        src={staticPath.icon.icon_arrowB_svg}
        alt='下矢印のアイコン画像'
        width={20}
        height={20}
        css={img}
      />
    </div>
  )
}

const imgParent = css`
  position: relative;
  text-align: right;
`

const select = css`
  cursor: pointer;
  appearance: none;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  padding: 8px 40px 8px 16px;
  font-size: 16px;
  color: #000;
  :hover {
    border: 2px solid #6b7280;
  }
  :focus-visible {
    outline: none;
    border: 2px solid #6b7280;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 36px 8px 12px;
  }
`

const img = css`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`
