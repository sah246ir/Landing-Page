import React from 'react'
import Section from './Section'
import Heading from './heading'
import SubHeading from './SubHeading'

interface PropTypes {
    title: string,
    description?: string
    className?: string
    img?: string
    children?: React.ReactNode
    gray?: boolean
}
const MainHeadingSection = ({ img,title, description, children, className, gray }: PropTypes) => {
    const imgg = img?require("../img/"+img):undefined
    return (
        <Section gray={gray} padded center className={'flex-col bg-gray-50 min-h-96 text-center max-w-[1100px] relative ' + className}>
            
            {imgg && <img src={imgg} alt="" className='absolute w-full h-full  ' />}
            {imgg && <div className="absolute w-full h-full bg-black opacity-50"></div> }
            <Heading className={'text-5xl font-medium text-center mb-4 z-30 ' + (imgg && "text-white ")}>{title}</Heading>
            {description && <SubHeading className={'text-center sm:w-[75%] sm:text-lg text-sm z-30 text-gray-600 leading-loose ' + (imgg?"text-white":"")}>{description}</SubHeading>}
            {children && 
            <div className='z-30'>

                {children}
            </div>
            }
        </Section>
    )
}

export default MainHeadingSection
