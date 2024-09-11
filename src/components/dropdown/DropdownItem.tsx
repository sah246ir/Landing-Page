import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DropdownContext } from './Dropdown'


interface PropTypes{
    children:React.ReactNode
    className?:string
    onClick?:()=>void
    to:string
}
const DropdownItem = ({children,className,to,onClick=()=>{}}:PropTypes) => {
  const Dropdown = useContext(DropdownContext)
  if(!Dropdown) throw Error()
  return (
    <Link onClick={()=>{Dropdown.setOpen(false);onClick()}} className={'whitespace-normal px-5 py-1 text-left w-full transition duration-200 flex-  border-0 text-lg tracking-widest !font-normal ' + className} to={to}>
      {children}
    </Link>
  )
}

export default DropdownItem
