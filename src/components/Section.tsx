import React from 'react'

interface Props{
    padded?:boolean,
    center?:boolean
    children:React.ReactNode
    className?:string
}
const Section = ({padded,center,children,className}:Props) => {
  return (
    <section className={`flex ${padded?"py-12 p-5":" "} ${center?"items-center justify-center":""} ${className}`}>
      {children}
    </section>
  )
}

export default Section
