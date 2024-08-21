import React from 'react'

interface PropTypes{
    className?:string,
    border?:string
    color?:string,
    concentricSize?:number
}
const Marker = ({className,border,color,concentricSize=.5}:PropTypes) => {
    return (
        <div style={{borderColor:border||"black"}} className={"border size-4 rounded-full grid place-items-center bg-white " + className}>
            <div style={{backgroundColor:color||"black",width:concentricSize+"rem",height:concentricSize+"rem"}} className="size-2 rounded-full "></div>
        </div>
    )
}

export default Marker
