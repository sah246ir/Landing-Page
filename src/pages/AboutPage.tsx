import React from 'react'
import useCarousel from '../hooks/useCarousel'
import Section from '../components/Section'
import { ArrowButton } from '../components/Button'
import LeaderCard from '../components/card/LeaderCard'
import MainHeadingSection from '../components/MainHeadingSection'
import JourneyCard from '../components/card/JourneyCard'
import Marker from '../components/Marker'
import Heading from '../components/heading'
import SubHeading from '../components/SubHeading'
import ServiceCard from '../components/InvestmentsComponents/ServiceCard'
const img = require("../img/ceo.jpg")
const img2 = require("../img/swiss2.webp")

const AboutPage = () => {
    const years = [2021, 2022, 2023, 2024]
    const { goprev, gonext, translate } = useCarousel({
        cards: 1
    })
    return (
        <div>
            <Section padded center className='min-h-[55em]'>
                <div className='w-full flex flex-col justify-center items-center gap-12'>
                    <div className="max-w-[1100px] flex flex-col sm:flex-row justify-between w-full items-center gap-5">
                        <div>
                            <h1 className='tracking-wider mb-2'>ABOUT US</h1>
                            <Heading className='text-3xl font-semibold mb-4 max-w-[450px]'>
                                Empowering Growth Through Strategic Investments and Innovative Business Consulting
                            </Heading>
                        </div>
                        <SubHeading className='max-w-[25em] !text-lg'>
                            At Classic Group, we specialize in transforming businesses with innovative solutions, combining expertise and integrity to deliver results that stand the test of time. Our commitment is to your success, helping you navigate challenges and seize opportunities in a dynamic world.
                        </SubHeading>
                    </div>

                    <div className="max-w-[1100px]  flex gap-4 flex-col sm:flex-row">
                        <img style={{ objectFit: "cover" }} className='w-full max-h-[400px]' src={img2} alt="" />
                        <img style={{ objectFit: "cover" }} className='sm:w-[45%]' src={img} alt="" />
                    </div>
                </div>


            </Section>

            <Section gray={false} padded center className='min-h-[35em]' >
                <div className="w-[1100px] flex items-center justify-center gap-11 flex-col sm:flex-row text-center sm:text-left">
                    <div className="sm:w-1/2">
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className="sm:w-1/2">
                        <Heading className='text-5xl  mb-4'>
                            Vinit Gupta
                        </Heading>
                        <SubHeading className=' leading-relaxed !text-xl w-full'>
                            Under Vinit’s leadership, Classic group has grown immensely. Today, it manages a substantial
                            AUM/ Portfolio of over Rs.200 crores. His expertise primarily lies in real estate investments,
                            where his keen market insights, location assessments, and project evaluations consistently yield
                            remarkable returns. Apart from investments, the company focuses on providing Strategy and
                            Management Consulting services                        </SubHeading>
                        <ArrowButton direction='r' size={40} className='transition-transform duration-500 mt-5 tracking-wider text-base hover:translate-x-2'>
                            &nbsp;
                            <span>Learn More</span>
                        </ArrowButton>
                    </div>
                </div>
            </Section>
            <Section padded  className='min-h-[10em] bg-white' />

            <Section padded center className='pt-0'>
                <div className="max-w-[1100px] w-full">
                    <Heading className='bg-gray-400 text-white p-7 sm:w-[12em] -translate-y-16'>
                        Our<br />
                        Company
                    </Heading>

                    <div className="flex flex-col gap-10">
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='min-w-[7em] font-normal  partial partial-sm'>
                                Our Vision
                            </Heading>
                            <SubHeading className='!text-base'>To make Classic Group the most innovative partner in the fields of Investments & Fund Management and
                                Strategy & Business Management Consulting, focused on highest value creation for associates and
                                stakeholders.<br/><br/>
                                To be an acknowledged leader in terms of maximizing stakeholder value, profitability and growth by being a
                                financially strong, customer-friendly, and progressive organization</SubHeading>
                        </div>
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='min-w-[7em] font-normal  partial partial-sm'>
                                Our Mission
                            </Heading>
                            <SubHeading className='!text-base'>To provide the best value proposition to all stakeholders through effective management of projects and offering
                            assured results for all business objectives</SubHeading>
                        </div>
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='min-w-[7em] font-normal  partial partial-sm'>
                                Our Values
                            </Heading>
                            <div className="flex w-full gap-3">
                                <ServiceCard className='flex-grow' heading='Integrity' content='We rigorously maintain high standards of truthfulness, honesty and constantly earn the trust of our stake holders ' /> 
                                <ServiceCard className='flex-grow' heading='Mutual Respect' content='We believe that every human being is unique and has some thing to offer to the society and should be respected. ' />
                                <ServiceCard className='flex-grow' heading='Pursuit of Excellence' content='We focus on maintaining highest level of quality in all our projects and services. Excellence in everything we do is what differentiates us from the rest' />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>


            <MainHeadingSection title='Our Journey' description='t was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.It was popularised in the 1960s with the release.'>
                <div className='w-full flex flex-col md:items-center justify-center bg-gray-50 min-h-96 text-center max-w-[1100px]'>
                    <div className="mt-5 flex justify-start items-start">
                        <div className="w-[5px]  h-full py-12 bg-gray-500 flex flex-col overflow-visible  items-start justify-around gap-11">
                            {
                                years.map((yr, i) => {
                                    const even = i % 2 === 0
                                    return (
                                        <div className={'relative flex items-center justify-start gap-4 ' + (even ? "md:flex-row-reverse md:-translate-x-full" : "")}>
                                            <Marker concentricSize={.65} color='gray' className={"size-[25px] -translate-x-[10px] " + (even ? "md:translate-x-[14.5px]" : "")} />
                                            <JourneyCard year={yr} className="w-[15em] sm:w-[25em] md:w-[20em]" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </MainHeadingSection>


            <Section gray={false} padded className='mb-10 flex justify-center'>
                <div className="w-[1100px] justify-center overflow-hidden">
                    <div className="p-5 flex sm:flex-row gap-5 sm:items-end justify-between flex-col items-center text-center sm:text-left">
                        <div>
                            <h1 className='tracking-wider mb-2'>WHAT WE PROVIDE</h1>
                            <Heading className='text-5xl font-semibold'>
                                Our Leaders
                            </Heading>
                        </div>
                        <div className='flex gap-1'>
                            <ArrowButton onClick={goprev} size={55} direction='l' />
                            <ArrowButton onClick={gonext} size={55} direction='r' />
                        </div>
                    </div>
                    <div className="flex w-full">
                        {[1].map(_ => {
                            return (
                                <div style={{ translate, transition: "translate 700ms ease-in-out" }} className="flex justify-center min-w-full gap-7 p-5">
                                    <LeaderCard name='Manoharlal Gupta' designation='Visionary founder' />
                                    <LeaderCard name='Kriti Gupta' designation='CEO' />
                                    <LeaderCard name='Vinit Gupta' designation='Dynamic leader' />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </Section>
        </div>
    )
}

export default AboutPage
