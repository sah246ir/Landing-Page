import React from 'react'
import Section from './Section'
import Heading from './heading'

interface PropTypes{
    title:string,
    description?:string
    className?:string
    children?:React.ReactNode
}
const MainHeadingSection = ({title,description,children,className}:PropTypes) => {
    return (
        <Section padded center className={'flex-col bg-gray-50 min-h-96 text-center max-w-[1100px]' + className}>
            <Heading className='text-5xl font-normal text-center mb-4'>{title}</Heading>
        {description && <p className='text-center sm:w-[65%] sm:text-sm text-xs text-gray-600 leading-loose'>{description}</p>}
            {children && children}
        </Section>
    )
}

export default MainHeadingSection
