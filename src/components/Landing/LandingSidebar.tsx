import React from 'react'
import { ArrowButton } from '../Button'

const LandingSidebar = () => {
  return (
    <div className='h-full flex flex-col justify-around items-center bg-gray-400 w-[30%] py-8 px-12 max-w-[422px]'>

      <div className="flex items-center gap-3">
        <div className="flex flex-col justify-between w-10 h-8 p-1">
          <div className="rounded-l-full rounded-r-full bg-black h-[4px] w-full"></div>
          <div className="rounded-l-full rounded-r-full bg-black h-[4px] w-full"></div>
          <div className="rounded-l-full rounded-r-full bg-black h-[4px] w-full"></div>
        </div>
        <p className='font-md'>MENU</p>
      </div>

      <div className="">
        <p className='text-sm text-gray-800'>It was popularised in the
          1960s with the release of
          Letraset sheets.
        </p>
        <ArrowButton direction='r' size={40} className='transition-transform duration-500 mt-5 tracking-wider text-md hover:translate-x-2'>
          &nbsp;
          <span>Case Study</span>
        </ArrowButton>
      </div>

      <div className="flex gap-5 w-[30em] sm:w-[45em] md:w-[55em] lg:w-[65em]">
        <div style={{aspectRatio:1/1.15}} className="bg-gray-300 min-w-[23%] "></div>
        <div style={{aspectRatio:1/1.15}} className="bg-gray-300 min-w-[23%] "></div>
        <div style={{aspectRatio:1/1.15}} className="bg-gray-300 min-w-[23%] "></div>
      </div>
    </div>
  )
}

export default LandingSidebar
