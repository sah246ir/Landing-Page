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
    iconClassName?:string
    onClick?:()=>void
    children?:React.ReactNode,
    strokeWidth?:number,
    stroke?:string,
    fill?:string,
}
export const ArrowButton = ({iconClassName,children,direction,size,className,onClick,strokeWidth,stroke}:ArrowButtonPropTypes)=>{
    const iconOptions = {
      size:size||65,
      strokeWidth:strokeWidth||1,
      stroke:stroke||"black", 
    }
    return(
        <button onClick={onClick} className={'text-red-800 ' + (className || "")}>
            {direction==="l" && <ArrowLeftCircleIcon style={{stroke:"rgb(153,27,27)"}} {...iconOptions} className={'inline ' + iconClassName}/>}
            {direction==="r" && <ArrowRightCircleIcon style={{stroke:"rgb(153,27,27)"}} {...iconOptions} className={'inline ' + iconClassName}/>}
            {children}
        </button>
    )
}

export default Button
