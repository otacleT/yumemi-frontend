import React from 'react'

/**
 * @package
 */

export const Header: React.FC = () => {
  return (
    <header className='relative w-full from-[#41a4fd] py-6 text-center after:absolute after:bottom-0 after:left-0 after:block after:h-2 after:w-full after:translate-y-full after:bg-gradient-to-b after:content-[""] sm:py-10'>
      <h1 className='text-2xl font-extrabold sm:text-3xl md:text-4xl'>YUMEMI</h1>
      <p className='mt-1 text-base font-bold sm:text-lg md:text-xl'>都道府県別の総人口推移グラフ</p>
    </header>
  )
}
