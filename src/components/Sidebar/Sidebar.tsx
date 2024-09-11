import React from 'react' 
import SidebarAction from './SidebarAction'
import Dropdown from '../dropdown/Dropdown'
import DropdownTitle from '../dropdown/DropdownTitle'
import DropdownContent from '../dropdown/DropdownContent'
import DropdownItem from '../dropdown/DropdownItem'


 

interface PropTypes {
  isopen?: boolean
  setIsOpen:Function
}
const Sidebar = ({ isopen,setIsOpen }: PropTypes) => {
  return (
    <div className={`whitespace-nowrap z-50 transition-all duration-300 ease-linear fixed  bg-white bg-opacity-95 sm:bg-opacity-100 top-0 right-0 min-h-screen ${isopen ? "w-full sm:w-[35%]" : "w-0"} flex items-center justify-center overflow-hidden`}>

      <div className="flex flex-col gap-8  w-full p-8">
       <SidebarAction onclick={setIsOpen} title='Home' href='/' />
       <SidebarAction onclick={setIsOpen} title='About us' href='/about-us' />
       <Dropdown>
          <DropdownTitle className='text-blue-900 hover:text-blue-700'>
            Services
          </DropdownTitle>
          <DropdownContent>
            <DropdownItem onClick={()=>setIsOpen(false)} className='text-blue-400 hover:text-blue-700' to='/investments'>Investments and strategic consulting</DropdownItem>  
            <DropdownItem onClick={()=>setIsOpen(false)} className='text-blue-400 hover:text-blue-700' to='/services'>Other Services</DropdownItem>  
          </DropdownContent>
       </Dropdown>
       <SidebarAction onclick={setIsOpen} title='Contact' href='/contact-us' />
      </div>

    </div>
  )
}

export default Sidebar
