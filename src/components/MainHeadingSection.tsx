import React from 'react'
import Section from './Section'
import Heading from './heading'

interface PropTypes{
    title:string,
    description?:string
}
const MainHeadingSection = ({title,description}:PropTypes) => {
    return (
        <Section padded center className='flex-col bg-gray-50 min-h-96 text-center'>
            <Heading className='text-5xl font-normal text-center mb-4'>{title}</Heading>
            {description && <p>{description}</p>}
        </Section>
    )
}

export default MainHeadingSection
