import { GaugeCircle } from 'lucide-react'
import React, { lazy, Suspense } from 'react'
import Heading from '../heading'
import SubHeading from '../SubHeading'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface PropTypes {
    icon?: keyof typeof dynamicIconImports,
    heading?: string
    content?: string
    className?: string
}

const fallback = <GaugeCircle className='text-gray-500' size={30} />
const ServiceCard = ({ heading, content, className, icon }: PropTypes) => {
    const LucideIcon = icon ? lazy(dynamicIconImports[icon]) : undefined;
    return (
        <div className={'transition duration-300 flex flex-col gap-2 bg-gray-50 border border-gray-300 p-4 py-6  hover:bg-white rounded-lg hover:scale-105 shadow-lg ' + className}>
            <Suspense fallback={fallback}>
                {LucideIcon && <LucideIcon className='text-gray-500' size={30} />}
            </Suspense>
                <Heading className='font-normal text-lg !m-0'>{heading || "Demo Service"}</Heading>
                <SubHeading className=' text-gray-600' >{content || `Are you doing the same tasks
                repeatedly Leave it with us,
                we'll put a robot in place to do it
                for you!`}</SubHeading>
        </div>
    )
}

export default ServiceCard
