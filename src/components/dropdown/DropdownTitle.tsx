import React, { useContext } from 'react'
import Button from '../Button'
import { DropdownContext } from './Dropdown'
import { ChevronDown } from 'lucide-react'

interface PropTypes{
    children:React.ReactNode
    className?:string
}
const DropdownTitle = ({children,className}:PropTypes) => {
  const Dropdown = useContext(DropdownContext)
  if(!Dropdown) throw Error()
  return (
    <Button onClick={()=>Dropdown.setOpen(prev=>!prev)} className={'text-left w-full transition duration-200 flex-grow border-0 border-b-2 border-gray-200 hover:border-gray-100 text-2xl tracking-widest !font-normal flex justify-between ' + className}>
      {children}
     <ChevronDown className={`transition duration-500 ${Dropdown.open?"rotate-180":"rotate-0"}`}  /> 
      </Button>
  )
}

export default DropdownTitle
