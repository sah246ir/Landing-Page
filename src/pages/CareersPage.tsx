import React from 'react'
import MainHeadingSection from '../components/MainHeadingSection' 
import Section from '../components/Section'
import { ArrowButton } from '../components/Button'
import OpenPositionCard from '../components/card/OpenPositionCard'
import Heading from '../components/heading'
import CareerForm from '../components/CareerPageComponents/CareerForm'
import LeftContact from '../components/HomePageComponents/Contact/LeftContact'
import Testimonial from '../components/CareerPageComponents/Testimonial'
const img = require("../img/swiss.jpg")

const CareersPage = () => {
    return (
        <div>
            <MainHeadingSection title='Careers' description='it to make a type specimen book. It has survived not only five centuries' />

            

            <Section gray={false} padded center >
                <div className="w-[1100px] flex items-center justify-center gap-11 flex-col sm:flex-row text-center sm:text-left">
                    <div className="">
                        <img width={500} src={img} alt="" />
                    </div>
                    <div className="sm:w-[30em]">
                        <h2 className='text-5xl font-semibold mb-4'>
                            Lorem Lipsum
                        </h2>
                        <p className='text-sm text-gray-700 leading-relaxed'>
                            It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages.It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages.It was
                            popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages.It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages.
                        </p>
                        <ArrowButton direction='r' size={40} className='transition-transform duration-500 mt-5 tracking-wider text-base hover:translate-x-2'>
                            &nbsp;
                            <span>Learn More</span>
                        </ArrowButton>
                    </div>
                </div>
            </Section>
            <MainHeadingSection gray={true} title='Career Opportunities' description='it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged'>
                <div className="max-w-[1100px] flex flex-col w-full mt-12">
                    <Heading className='text-left text-lg text-gray-700 mb-2'>10 Open Positions</Heading>
                    <div className="flex flex-col w-full divide-y-2  divide-gray-400">
                        <OpenPositionCard />
                        <OpenPositionCard />
                        <OpenPositionCard />
                        <OpenPositionCard />
                    </div>
                </div>
            </MainHeadingSection>
            <MainHeadingSection gray={false} title='Testimonial' description='it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged'> 
                    <Testimonial /> 
            </MainHeadingSection>
            <Section padded center>
                <div className='w-[100%] lg:w-[1100px] flex text-center md:text-left items-center md:items-start md:justify-between p-5 md:flex-row flex-col-reverse gap-5'>
                    <LeftContact />
                    <CareerForm />
                </div>
            </Section>

        </div>
    )
}

export default CareersPage
