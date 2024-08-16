import React from 'react'
import Button from './Button'

interface PropTypes {
  isopen?: boolean
}
const Sidebar = ({ isopen }: PropTypes) => {
  return (
    <div className={`transition-all duration-300 ease-linear absolute size-10 bg-gray-300 top-0 right-0 min-h-screen ${isopen ? "w-96" : "w-0"} z-30 flex items-center justify-center overflow-hidden`}>

      <div className="flex flex-col gap-8  w-full p-8">
        <Button className='flex-grow text-gray-800  border-0 border-b-2 border-gray-200 text-2xl tracking-widest !font-light'>Action</Button>
        <Button className='flex-grow text-gray-800  border-0 border-b-2 border-gray-200 text-2xl tracking-widest !font-light'>Action</Button>
        <Button className='flex-grow text-gray-800  border-0 border-b-2 border-gray-200 text-2xl tracking-widest !font-light'>Action</Button>
        <Button className='flex-grow text-gray-800  border-0 border-b-2 border-gray-200 text-2xl tracking-widest !font-light'>Action</Button>
      </div>

    </div>
  )
}

export default Sidebar
