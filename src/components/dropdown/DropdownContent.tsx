import React, { useContext } from 'react'
import { DropdownContext } from './Dropdown'

interface PropTypes{
    children:React.ReactNode
    className?:string
}
const DropdownContent = ({children,className}:PropTypes) => {
  const Dropdown = useContext(DropdownContext)
  if(!Dropdown) throw Error()
  return (
    <div className={`w-full flex flex-col gap-3 mt-2 transition-all duration-500 overflow-hidden ${Dropdown.open?"h-32":"h-0"} ` + className}>
      {children}
    </div>
  )
}

export default DropdownContent
