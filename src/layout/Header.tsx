import React from 'react'

/**
 * @package
 */

export const Header: React.FC = () => {
  return (
    <header className='relative w-full from-[#41a4fd] py-6 sm:py-10 text-center after:absolute after:bottom-0 after:left-0 after:block after:h-2 after:w-full after:translate-y-full after:bg-gradient-to-b after:content-[""]'>
      <h1 className='md:text-4xl font-extrabold sm:text-3xl text-2xl'>YUMEMI</h1>
      <p className='mt-1 md:text-xl font-bold sm:text-lg text-base'>都道府県別の総人口推移グラフ</p>
    </header>
  )
}
