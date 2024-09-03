import React from 'react'
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "lucide-react"

interface ButtonPropTypes{
    children:React.ReactNode,
    className?:string,
    onClick?:()=>void
}
const Button = ({children,className,onClick}:ButtonPropTypes) => {
  return (
    <button onClick={onClick} className={'px-5 py-2 border border-black font-medium ' + (className || "")}>
      {children}
    </button>
  )
}

interface ArrowButtonPropTypes{
    size?:number,
    direction: "l" | "r"
    className?:string
    onClick?:()=>void
    children?:React.ReactNode,
    strokeWidth?:number,
    stroke?:string,
    fill?:string,
}
export const ArrowButton = ({fill,children,direction,size,className,onClick,strokeWidth,stroke}:ArrowButtonPropTypes)=>{
    const iconOptions = {
      size:size||65,
      strokeWidth:strokeWidth||1,
      stroke:stroke||"black", 
    }
    return(
        <button style={{color:"#ad0000"}} onClick={onClick} className={'' + (className || "")}>
            {direction==="l" && <ArrowLeftCircleIcon style={{stroke:"#ad0000"}} {...iconOptions} className='inline'/>}
            {direction==="r" && <ArrowRightCircleIcon style={{stroke:"#ad0000"}} {...iconOptions} className='inline'/>}
            {children}
        </button>
    )
}

export default Button
