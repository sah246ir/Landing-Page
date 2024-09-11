import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

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

export default SidebarAction
