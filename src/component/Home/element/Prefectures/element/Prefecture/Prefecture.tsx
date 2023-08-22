import React, {useState} from 'react'

import {useSelectedPrefDispatch} from '@/component/Home/context/SelectedPrefContext'

type PrefectureProps = {
  prefCode: number
  prefName: string
}

/**
 * @package
 */
export const Prefecture: React.FC<PrefectureProps> = ({prefCode, prefName}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const dispatch = useSelectedPrefDispatch()
  return (
    <li>
      <button
        onClick={() => {
          if (!dispatch) {
            return
          }
          dispatch({
            type: isChecked ? 'deleted' : 'added',
            prefCode,
            prefName,
          })
          setIsChecked((prev) => !prev)
        }}
        className={`
        flex
        h-9
        w-full
        items-center
        justify-center
        rounded-full
        border
        border-black
        before:mr-1
        before:flex
        before:h-5
        before:w-5
        before:items-center
        before:justify-center
        before:text-xl
        ${isChecked ? 'before:content-["✓"]' : 'before:content-["+"]'}
        `}
      >
        {prefName}
      </button>
    </li>
  )
}
