import React, { useEffect } from 'react'
import Section from '../components/Section'
import Heading from '../components/heading'
import Button, { ArrowButton } from '../components/Button'
import ServiceCard from '../components/InvestmentsComponents/ServiceCard'
import SubHeading from '../components/SubHeading' 
const img2 = require("../img/ceo.jpg")
const leaders = require("../img/leaders.jpeg")
const why = require("../img/why.jpg")

const InvestmentsPage = () => {
    useEffect(()=>{
        document.title = "Investments"
      },[])
    return (
        <div>
            {/* <MainHeadingSection img="invest.jpg" className='text-white' title='Investment Management' description='our company has emerged as one of the most progressive, whose businessphilosophy lies in the commitment to seeking Investments & Fund Management in all spectrums of the Realty' >
                <Button className='bg-black text-white !font-light rounded-full mt-5 z-50'>
                    Learn More
                </Button>
            </MainHeadingSection>  */}
            <Section gray={false} padded center>
                <div className="max-w-[1100px] w-full flex items-center justify-center flex-col gap-5 ">
                    <Heading className=' mb-5'>Approach to Investment </Heading>
                    <div className="flex gap-10 flex-col sm:flex-row">
                        <img alt='' style={{ objectPosition: "center", objectFit: "cover" }} className='w-[100%] sm:w-[25em]' src={img2} />
                        <div className="sm:w-[350px] flex flex-col justify-around text- ">
                            <SubHeading className='!text-xl !font-light text-black'>
                                <q>
                                We want to help our partners generate consistent returns by investing in instruments of companies that
                                are engaged in Real Estate and emerging New Age Businesses and Consumer experiences.
                                </q>
                            </SubHeading>

                            <div className="mt-3">
                                <Heading className='font-medium text-xl'>Saandip Kundu</Heading>
                                <SubHeading className='text-sm text-gray-700'>Head of partner investments</SubHeading>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <Heading className='mb-3 text-xl'>Investment Strategies</Heading>
                        <div className="flex gap-5 flex-col sm:flex-row">
                            <ServiceCard heading='Active Management' className='' />
                            <ServiceCard heading='Conservative Approach & Diversified Investing' className='' />
                            <ServiceCard heading='Partnering with Local Players and Industry experts' className='' />
                        </div>
                    </div>
                </div>
            </Section>

            <Section gray={false} padded center className='py-12'>
                <div className="max-w-[1100px] w-full flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
                    <div className="flex flex-col gap-5 px-7 w-full">
                        <div>
                            <Heading className='mb-4'>What we can do for you</Heading>
                            <SubHeading className=' leading-loose'>
                            We have acquired a comprehensive understanding of the processes involved in bringing projects to a successful
                            conclusion. The Group itself has committed long-term investments in several projects and also uses its expertise to
                            assist other project investors. This expertise encompasses infrastructural, commercial and business hemispheres
                            </SubHeading>
                        </div>

                        <Heading className='!text-2xl'>Investment Process</Heading>
                        <hr />
                        <div className="flex flex-col items-center md:items-start gap-7">
                            <div className="flex items-center gap-3">
                                <img width={75} src={why} alt="description" />
                                <Heading className='text-base font-normal'>Sourcing Deal</Heading>
                            </div>

                            <div className="flex items-center gap-3">
                                <img width={75} src={why} alt="description" />
                                <Heading className='text-base font-normal'>Due Diligence</Heading>
                            </div>

                            <div className="flex items-center gap-3">
                                <img width={75} src={why} alt="description" />
                                <Heading className='text-base font-normal'>Conceptualization of the Project</Heading>
                            </div>

                            <div className="flex items-center gap-3">
                                <img width={75} src={why} alt="description" />
                                <Heading className='text-base font-normal'> Constant Monitoring & Hand Holding</Heading>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <img className='w-full object-cover' src={why} alt="description" />
                        <div className="flex gap-5 flex-wrap mt-4 justify-center md:justify-between pr-5 pl-5 md:pl-0">
                            <div className="flex items-center gap-3 ">
                                <img width={55} src={why} alt="description" />
                                <Heading className='text-sm font-normal'>Professional Management with proven track Record</Heading>
                            </div>

                            <div className="flex items-center gap-3">
                                <img width={55} src={why} alt="description" />
                                <Heading className='text-sm font-normal'>Good Corporate Governance</Heading>
                            </div>

                            <div className="flex items-center gap-3">
                                <img width={55} src={why} alt="description" />
                                <Heading className='text-sm font-normal'>Extensive Relationships</Heading>
                            </div>
                        </div>
                        <Button className='bg-black text-white rounded-full font-normal mt-6'>
                            Let’s Connect
                        </Button>
                    </div>

                </div>
            </Section>





            <Section padded center className='!bg-blue-900'>
                <div className="max-w-[1100px] w-full  ">

                    <div className='transition duration-300 bg-white border border-gray-300 px-6 py-6 sm:w-[22em] rounded-lg hover:scale-105    hover:bg-gray-100 flex flex-col justify-center shadow-lg   '>
                        <Heading className='font-md !text-2xl !leading-7 '>How well-performed
                            SEO can benefit</Heading>
                        <SubHeading className='text-xl text-gray-600 mt-3' >Are you doing the same tasks
                            repeatedly? Leave it with us,
                            we'll put a robot in place to do it
                            for you!</SubHeading> 
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



            <Section center padded style={{ marginInline: "auto" }} className='!bg-blue-900'>
                <div className="flex max-w-[1000px] flex-col items-center gap-8">
                    <Heading className='text-center !mb-0 text-white'>
                        How Can We Help You?
                    </Heading>
                    <SubHeading className='text-center text-white'>It was popularised in the 1960s with the release of Letraset sheets containing</SubHeading>
                    <Button className='bg-white transition duration-300 rounded-full font-normal border-0 hover:text-white hover:bg-blue-800'>
                        Contact Us
                    </Button>
                </div>

            </Section>





        </div>
    )
}

export default InvestmentsPage
