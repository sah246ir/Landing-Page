import React from 'react' 
import SidebarAction from './SidebarAction'


 

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
       <SidebarAction onclick={setIsOpen} title='investments' href='/investments' />
       <SidebarAction onclick={setIsOpen} title='Services' href='/services' />
       <SidebarAction onclick={setIsOpen} title='Contact' href='/contact-us' />
      </div>

    </div>
  )
}

export default Sidebar
