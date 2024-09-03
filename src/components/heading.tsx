import React from 'react'

interface PropTypes{
    children:React.ReactNode
    className?:string
}
const Heading = ({children,className}:PropTypes) => {
    return (
        <h1 className={'text-3xl font-medium mb-2 '+className}>
            {children}
        </h1>
    )
}

export default Heading
