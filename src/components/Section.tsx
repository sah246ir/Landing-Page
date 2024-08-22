import React, { CSSProperties } from 'react'

interface Props{
    padded?:boolean,
    center?:boolean
    gray?:boolean
    children?:React.ReactNode
    className?:string
    style?:CSSProperties
}
const Section = ({padded,center,children,className,style,gray=true}:Props) => {
  return (
    <section style={{...style}} className={`flex ${padded?"py-24 p-5 ":" "} ${center?"items-center justify-center ":""} ${gray?"bg-gray-50":" bg-white"} ${className}`}>
      {children && children}
    </section>
  )
}

export default Section
