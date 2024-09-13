import React, { useEffect } from 'react'
import Section from '../components/Section'
import Heading from '../components/heading'
import Button, { ArrowButton } from '../components/Button'
import SubHeading from '../components/SubHeading' 
import { BadgeCheck } from 'lucide-react'
const img2 = require("../img/ceo.jpg")
const leaders = require("../img/leaders.jpeg")
const why = require("../img/why.jpg")

const BusinessConsultingPage = () => {
    useEffect(() => {
        document.title = "Business consulting"
    }, [])
    return (
        <div>
            {/* <MainHeadingSection img="invest.jpg" className='text-white' title='Investment Management' description='our company has emerged as one of the most progressive, whose businessphilosophy lies in the commitment to seeking Investments & Fund Management in all spectrums of the Realty' >
                <Button className='bg-black text-white !font-light rounded-full mt-5 z-50'>
                    Learn More
                </Button>
            </MainHeadingSection>  */}
            <Section gray={false} padded center>
                <div className="max-w-[1100px] w-full flex items-center justify-center flex-col gap-5 ">
                    <Heading className=' mb-5'>Approach to Business Consulting </Heading>
                    <div className="flex gap-10 flex-col sm:flex-row">
                        <img alt='' style={{ objectPosition: "center", objectFit: "cover" }} className='w-[100%] sm:w-[25em]' src={img2} />
                        <div className="sm:w-[350px] flex flex-col justify-around text- ">
                            <SubHeading className='!text-2xl !font-light text-black'> 
                                We have a rich foundation of functional expertise. To expand or transform a business you have to get the basics right.
                                That’s why our expert team, with extensive and highly-developed domain expertise and a wealth of experience, together
                                with our group-wide culture of innovation and creativity, ethics and values, you can be assured that your company’s
                                expansion or transformation is being nurtured by a professional team, offering focused services. 
                            </SubHeading>

                            {/* <div className="mt-3">
                                <Heading className='font-medium text-xl'>Saandip Kundu</Heading>
                                <SubHeading className='text-sm text-gray-700'>Head of partner investments</SubHeading>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Section>  
            <Section padded  className='min-h-[10em] bg-white' />
            <Section padded center className='pt-0 !bg-blue-900'>
                <div className="max-w-[1100px] w-full">
                    <Heading className='bg-blue-800 text-white p-7 sm:w-[12em] -translate-y-16  shadow-lg'>
                        Our Mission
                    </Heading>

                    <div className="flex flex-col gap-7">
                        <div className="flex items-start flex-col md:flex-row gap-4 text-white"> 
                            <i className="min-w-11">
                                <BadgeCheck  size={35} className='stroke-blue-400'/>  
                            </i>
                            <Heading className='text-white text-xl text-justify font-semibold'>
                                To make Classic Group the most innovative partner in the fields of Investments & Fund Management and
                                Strategy & Business Management Consulting, focused on highest value creation for associates and
                                stakeholders.
                            </Heading>
                        </div> 

                        <div className="flex items-start flex-col md:flex-row gap-4 text-white"> 
                            <i className="min-w-11">
                                <BadgeCheck  size={35} className='stroke-blue-400'/>    
                            </i>
                            < Heading className='text-white text-xl text-justify font-semibold'>
                            Our mission is to empower our associates, partners and clients to respond faster and more intuitively to
                            changing market dynamics. We enable them to become more agile and competitive through our specialized
                            strategic consulting services
                            </ Heading>
                        </div> 

                        <div className="flex items-start flex-col md:flex-row gap-4 text-white"> 
                            <i className="min-w-11">
                                <BadgeCheck  size={35} className='stroke-blue-400'/>    
                            </i>
                            <Heading className='text-white text-xl text-justify font-semibold'>
                            To cater to the real needs of clients with strong business ethics.
                            </Heading>
                        </div> 

                        <div className="flex items-start flex-col md:flex-row gap-4 text-white"> 
                            <i className="min-w-11">
                                <BadgeCheck  size={35} className='stroke-blue-400'/>    
                            </i>
                            <Heading className='text-white text-xl text-justify font-semibold'>
                            To deliver value based services and offer excellent investment returns on projects.
                            </Heading>
                        </div> 

                        <div className="flex items-start flex-col md:flex-row gap-4 text-white"> 
                            <i className="min-w-11">
                                <BadgeCheck  size={35} className='stroke-blue-400'/>    
                            </i>
                            <Heading className='text-white text-xl text-justify font-semibold'>
                            Evolve contemporary benchmarks in our business practices.
                            </Heading>
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

        </div>
    )
}

export default BusinessConsultingPage
