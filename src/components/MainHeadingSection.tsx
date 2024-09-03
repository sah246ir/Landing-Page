import React from 'react'
import Section from './Section'
import Heading from './heading'
import SubHeading from './SubHeading'

interface PropTypes{
    title:string,
    description?:string
    className?:string
    children?:React.ReactNode
    gray?:boolean
}
const MainHeadingSection = ({title,description,children,className,gray}:PropTypes) => {
    return (
        <Section gray={gray} padded center className={'flex-col bg-gray-50 min-h-96 text-center max-w-[1100px]' + className}>
            <Heading className='text-5xl font-medium text-center mb-4'>{title}</Heading>
        {description && <SubHeading className='text-center sm:w-[65%] sm:text-sm text-xs text-gray-600 leading-loose'>{description}</SubHeading>}
            {children && children}
        </Section>
    )
}

export default MainHeadingSection
