import React from 'react'

/**
 * @package
 */

export const NoData: React.FC = () => {
  return (
    <div className='grid aspect-video place-items-center rounded-lg bg-gradient-to-r from-[#41a4fd] to-[#677efa]'>
      <p className='text-base font-bold text-white sm:text-lg md:text-xl'>
        都道府県を選択してください
      </p>
    </div>
  )
}
