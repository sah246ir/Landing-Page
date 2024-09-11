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
    <Link className='text-left w-full text-blue-900 hover:text-blue-700' to={href}> 
      <Button onClick={()=>onclick((prev: boolean)=>!prev)} className='text-left w-full transition duration-200 flex-grow border-0 border-b-2 border-gray-200 hover:border-gray-100 text-2xl tracking-widest !font-normal'>
 
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
    <div className={`whitespace-nowrap z-50 transition-all duration-300 ease-linear fixed  bg-white bg-opacity-95 sm:bg-opacity-100 top-0 right-0 min-h-screen ${isopen ? "w-full sm:w-[25%]" : "w-0"} flex items-center justify-center overflow-hidden`}>

      <div className="flex flex-col gap-8  w-full p-8">
       <SidebarAction onclick={setIsOpen} title='Home' href='/' />
       <SidebarAction onclick={setIsOpen} title='About us' href='/about-us' />
       {/* <SidebarAction onclick={setIsOpen} title='Case Study' href='/case-study' /> */}
       <SidebarAction onclick={setIsOpen} title='investments' href='/investments' />
       {/* <SidebarAction onclick={setIsOpen} title='Blogs' href='/blog' /> */}
       <SidebarAction onclick={setIsOpen} title='Services' href='/services' />
       <SidebarAction onclick={setIsOpen} title='Contact' href='/contact-us' />
       {/* <SidebarAction onclick={setIsOpen} title='Careers' href='/careers' /> */}
      </div>

    </div>
  )
}

export default Sidebar
