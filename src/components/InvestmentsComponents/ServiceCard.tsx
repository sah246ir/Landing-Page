import { GaugeCircle } from 'lucide-react'
import React from 'react'
import Heading from '../heading'
import SubHeading from '../SubHeading'

interface PropTypes{
    icon?:any
    heading?:string
    content?:string
    className?:string
}
const ServiceCard = ({heading,content,className}:PropTypes) => {
    return (
        <div className={'transition flex flex-col gap-2 bg-gray-50 border border-gray-300 p-4 py-6  hover:bg-white ' + className}>
            <GaugeCircle className='text-gray-500' size={30} />
            <Heading className='font-normal text-lg !m-0'>{heading || "Demo Service"}</Heading>
            <SubHeading className=' text-gray-600' >{content || `Are you doing the same tasks
                repeatedly Leave it with us,
                we'll put a robot in place to do it
                for you!`}</SubHeading>
        </div>
    )
}

export default ServiceCard
