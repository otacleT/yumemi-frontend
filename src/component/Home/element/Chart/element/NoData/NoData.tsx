import React from 'react'

/**
 * @package
 */

export const NoData: React.FC = () => {
  return (
    <div className='w-full aspect-video bg-gradient-to-r from-[#41a4fd] to-[#677efa] rounded-lg grid place-items-center'>
      <p className='text-xl font-bold text-white'>都道府県を選択してください</p>
    </div>
  )
}
