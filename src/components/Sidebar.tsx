import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'








interface ActionProps{
  title:string,
  href:string,
  onclick:Function
}
export const SidebarAction = ({title,href,onclick}:ActionProps)=>{
  return(
    <Link className='text-center w-full' to={href}> 
      <Button onClick={()=>onclick((prev: boolean)=>!prev)} className='w-full transition duration-200 flex-grow text-gray-800 hover:text-gray-600  border-0 border-b-2 border-gray-200 hover:border-white text-2xl tracking-widest !font-light'>
        {title}
      </Button>
    </Link>

  )
}
interface PropTypes {
  isopen?: boolean
  setIsOpen:Function
}
const Sidebar = ({ isopen,setIsOpen }: PropTypes) => {
  return (
    <div className={`whitespace-nowrap z-50 transition-all duration-300 ease-linear fixed  bg-gray-300 bg-opacity-95 sm:bg-opacity-100 top-0 right-0 min-h-screen ${isopen ? "w-full sm:w-96" : "w-0"} flex items-center justify-center overflow-hidden`}>

      <div className="flex flex-col gap-8  w-full p-8">
       <SidebarAction onclick={setIsOpen} title='Home' href='/' />
       <SidebarAction onclick={setIsOpen} title='Case Study' href='/case-study' />
       <SidebarAction onclick={setIsOpen} title='Action' href='/' />
       <SidebarAction onclick={setIsOpen} title='Action' href='/' />
       <SidebarAction onclick={setIsOpen} title='Action' href='/' />
      </div>

    </div>
  )
}

export default Sidebar
