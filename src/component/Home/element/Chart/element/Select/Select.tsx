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
    <div className='relative text-right'>
      <select
        className='relative cursor-pointer appearance-none rounded-lg border-2 border-gray-300 py-2 pl-3 pr-9 text-sm hover:border-gray-500 focus-visible:outline-gray-500 md:pl-4 md:pr-10 md:text-base'
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
        className='pointer-events-none absolute right-2 top-1/2 -translate-y-1/2'
      />
    </div>
  )
}
