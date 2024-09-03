import React from 'react'
interface PropTypes{
    children:React.ReactNode
    className?:string
}
const SubHeading = ({children,className}:PropTypes) => {
  return (
    <p className={'text-sm text-gray-800 ' + className}>
        {children}
    </p>
  )
}

export default SubHeading
