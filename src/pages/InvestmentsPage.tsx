import React from 'react'
import Section from '../components/Section'
import Heading from '../components/heading'
import Button, { ArrowButton } from '../components/Button'
import ServiceCard from '../components/InvestmentsComponents/ServiceCard'
import SubHeading from '../components/SubHeading'
const img1 = require("../img/swiss2.webp")
const img2 = require("../img/ceo.jpg")
const leaders = require("../img/leaders.jpeg")

const InvestmentsPage = () => {
    return (
        <div>
            <Section padded gray center>
                <div className="max-w-[1100px] flex items-center justify-center flex-col gap-5 ">
                    <Heading >Investment Management</Heading>
                    <div className="max-h-[25em] overflow-hidden">
                        <img alt='' style={{ objectPosition: "center", objectFit: "cover" }} className='w-full' src={img1} />
                    </div>
                    <SubHeading className='md:w-[65%] text-center leading-loose'>
                    Focused on delivering reliable returns through strategic investments in real estate, emerging businesses, and consumer experiences, leveraging a disciplined approach and local expertise to maximize value and ensure project success.                    </SubHeading >
                    <Button className='bg-black text-white !font-light rounded-full'>
                        Learn More
                    </Button>
                </div>
            </Section>


            <Section gray={false} padded center>
                <div className="max-w-[1100px] w-full flex items-center justify-center flex-col gap-5 ">
                    <Heading className=' mb-5'>Competitive Edge</Heading>
                    <div className="flex gap-10 flex-col sm:flex-row">
                        <img alt='' style={{ objectPosition: "center", objectFit: "cover" }} className='w-[100%] sm:w-[25em]' src={img2} />
                        <div className="sm:w-[350px] flex flex-col justify-around text-center">
                            <SubHeading className='!text-2xl !font-light text-black'>
                                <q>
                                    Are you doing the same tasks
                                    repeatedly? Leave it with us,
                                    we'll put a robot in place to do
                                    it for you!
                                </q>
                            </SubHeading>

                            <div className="mt-3">
                                <Heading className='font-medium text-xl'>Saandip Kundu</Heading>
                                <SubHeading className='text-sm text-gray-700'>Head | Investment Management</SubHeading>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-5 mt-16">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                </div>
            </Section>

            <Section gray={false} padded  center className='py-12'>
                <div className="max-w-[1100px] w-full flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
                    <div className="flex flex-col gap-5 px-7 w-full">
                        <div>
                            <Heading className='mb-4'>What we can do for you</Heading>
                            <SubHeading className=' leading-loose'>
                            We offer tailored investment strategies designed to maximize returns through expertly managed and diversified portfolios in real estate, new-age businesses, and consumer experiences.
                            </SubHeading>
                        </div>

                        <Heading className='!text-2xl'>Fund</Heading>
                        <hr />
                        <div className="flex flex-col items-center md:items-start gap-7">
                            <div className="flex items-center gap-3">
                                <img width={75} src={img1} alt="description" />
                                 <Heading className='text-base font-normal'>MANAGED ACCOUNTS</Heading>
                            </div>

                            <div className="flex items-center gap-3">
                                <img width={75} src={img1} alt="description" />
                                 <Heading className='text-base font-normal'>MANAGED ACCOUNTS</Heading>
                            </div>

                            <div className="flex items-center gap-3">
                                <img width={75} src={img1} alt="description" />
                                 <Heading className='text-base font-normal'>MANAGED ACCOUNTS</Heading>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <img className='w-full' src={img1} alt="description" />
                        <div className="flex gap-5 flex-wrap mt-4 justify-center md:justify-between pr-5 pl-5 md:pl-0">
                            <div className="flex items-center gap-3 ">
                                <img width={55} src={img1} alt="description" />
                                 <Heading className='text-sm font-normal'>MANAGED ACCOUNTS</Heading>
                            </div>

                            <div className="flex items-center gap-3">
                                <img width={55} src={img1} alt="description" />
                                 <Heading className='text-sm font-normal'>MANAGED ACCOUNTS</Heading>
                            </div>

                            <div className="flex items-center gap-3">
                                <img width={55} src={img1} alt="description" />
                                 <Heading className='text-sm font-normal'>MANAGED ACCOUNTS</Heading>
                            </div>
                        </div>
                        <Button className='bg-black text-white rounded-full font-normal mt-6'>
                        Let’s Connect
                        </Button>
                    </div>

                </div>
            </Section>





            <Section gray padded center>
                <div className="max-w-[1100px] w-full  ">

                    <div className=' bg-gray-200 border border-gray-300 px-9 py-12 sm:w-[22em]   hover:bg-gray-100 flex flex-col justify-center  '>
                        <Heading className='font-md !text-2xl !leading-7 '>How well-performed
                            SEO can benefit</Heading>
                        <SubHeading className='text-xs text-gray-600 mb-8 mt-3' >Are you doing the same tasks
                            repeatedly? Leave it with us,
                            we'll put a robot in place to do it
                            for you!</SubHeading>
                        <Button className='bg-black text-white rounded-full font-normal'>
                            Download
                        </Button>
                    </div>
                </div>
            </Section>

            <Section gray={false} padded center >
                <div className="max-w-[1100px]  flex items-center   gap-10 flex-col sm:flex-row text-center sm:text-left">
                    <div className="">
                        <img className='w-[500px]' src={leaders} alt="description" />
                    </div>
                    <div className="sm:w-[400px]">
                        <Heading>Meet the leaders</Heading>
                        <SubHeading className='text-gray-700'>Explore the backgrounds and expertise of our visionary leaders who are dedicated to steering our company towards innovation and success. Their diverse experiences and strategic insights drive our mission and shape our future, ensuring we remain at the forefront of our industry.
                        </SubHeading>
                        <ArrowButton direction='r' size={30} className='transition-transform duration-500 mt-5 tracking-wider text-sm hover:translate-x-2'>
                            &nbsp;
                            <span>Learn More</span>
                        </ArrowButton>
                    </div>
                </div>
            </Section>



            <Section center padded style={{ marginInline: "auto" }} >
                <div className="flex max-w-[1000px] flex-col items-center gap-5">
                    <Heading className='text-center !mb-0'>
                        How Can We Help You?
                    </Heading>
                    <SubHeading className='text-center'>It was popularised in the 1960s with the release of Letraset sheets containing</SubHeading>
                    <Button className='bg-black text-white rounded-full font-normal'>
                        Contact Us
                    </Button>
                </div>

            </Section>





        </div>
    )
}

export default InvestmentsPage
