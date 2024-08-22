import React from 'react'
import Section from '../components/Section'
import Heading from '../components/heading'
import Button, { ArrowButton } from '../components/Button'
import ServiceCard from '../components/InvestmentsComponents/ServiceCard'
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
                    <p className='md:w-[65%] text-center text-xs text-gray-600 leading-loose'>
                        t was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.It
                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    </p >
                    <Button className='bg-black text-white !font-light rounded-full'>
                        Learn More
                    </Button>
                </div>
            </Section>


            <Section gray={false} padded center>
                <div className="max-w-[1100px] w-full flex items-center justify-center flex-col gap-5 ">
                    <Heading className='!font-light mb-5'>Competitive Edge</Heading>
                    <div className="flex gap-10 flex-col sm:flex-row">
                        <img alt='' style={{ objectPosition: "center", objectFit: "cover" }} className='w-[100%] sm:w-[25em]' src={img2} />
                        <div className="sm:w-[350px] flex flex-col justify-around text-center">
                            <p className='text-2xl !font-light'>
                                <q>
                                    Are you doing the same tasks
                                    repeatedly? Leave it with us,
                                    we'll put a robot in place to do
                                    it for you!
                                </q>
                            </p>

                            <div className="mt-3">
                                <h1 className='font-medium text-xl'>Saandip Kundu</h1>
                                <p className='text-sm text-gray-700'>Head | Investment Management</p>
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
                            <p className=' text-sm text-gray-600 leading-loose'>
                                it to make a type specimen book. It has survived not
                                only five centuries, but also.it to make a type specimen
                                book. It has survived not only five.
                            </p>
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
                        <p className='text-xs text-gray-600 mb-8' >Are you doing the same tasks
                            repeatedly? Leave it with us,
                            we'll put a robot in place to do it
                            for you!</p>
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
                        <p className='text-sm text-gray-700'>It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages.It was popularised in
                            the 1960s with the release of Letraset sheets containing Lorem
                            Ipsum passages.
                        </p>
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
                    <p className='text-center text-sm text-gray-600'>It was popularised in the 1960s with the release of Letraset sheets containing</p>
                    <Button className='bg-black text-white rounded-full font-normal'>
                        Contact Us
                    </Button>
                </div>

            </Section>





        </div>
    )
}

export default InvestmentsPage
