import React from 'react'
import MainHeadingSection from '../components/MainHeadingSection'
import Section from '../components/Section'
import Heading from '../components/heading'
import Button from '../components/Button'
import ContactCard from '../components/card/ContactCard'
import SubHeading from '../components/SubHeading'
import PortfolioSection from '../components/HomePageComponents/Portfolio/PortfolioSection'

const ServicesPage = () => {
    const services = [
        {
            img: "corporate.jpg",
            heading: "Corporate Advisory",
            description: "The group can deliver a variety of advisory services including all types of restructuring, joint ventures, acquisitions &mergers and asset sales. In particular, it offers international companies a highly professional conduit for transactingbusiness in India and identifying suitable partners as well as providing the full range of establishment services needed forconducting business in India. The Group also acts for businesses seeking investments/acquisitions in other parts thecountry or across the globe. This is further backed up by our ability to arrange the required capital",
            action:"Lets connect"
        },
        {
            img: "investment.jpg",
            heading: "Private Equity & Direct Investment",
            description: "The investment & fund division of the Classic Group sources the best private equity deals in particular sectors in India. The Group has had a long and successful track record of investmkents, as principal investor and as a provider of support services to its associates and partners",
            action:"Learn More"
        },
        {
            img: "asset.jpg",
            heading: "Asset Management",
            description: "For private associates and partners, the Group’s platform of products and services provides access to a wide range ofinvesting and wealth building tools with the personal guidance of financial experts.The Group offers a full range of financial products and services to high net worth individuals. It also provides professionalasset management services for small and medium sized companies.The Asset Mangement Services of the Group provides medium to long-term capital growth, combined with reducedvolatility through diversification. The services offer the investor to select his portfolio mix and includes a power of attorneyauthorizing the Group to make the investments.",
            action:"Learn More"
        }, 
    ]
    return (
        <div>
            {/* <MainHeadingSection img='services.jpg' title='Our Services' description='it to make a type specimen book. It has survived not only five centuries' /> */}
            {/* <Section gray={false} padded center>
                <div className="max-w-[1100px] flex items-center justify-center flex-col gap-5 ">
                    <div className="max-h-[25em] overflow-hidden">
                        <img alt='' style={{ objectPosition: "center", objectFit: "cover" }} className='w-full' src={img1} />
                    </div>
                    <Heading >Investment Management</Heading>
                    <p className='md:w-[65%] text-center text-xs text-gray-600 leading-loose'>
                        t was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.It
                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    </p >
                    <Button className='bg-black text-white !font-light rounded-full'>
                        Learn More
                    </Button>
                </div>
            </Section>*/}

            <PortfolioSection  cardcontent={services} subheading='Our Services' heading='What we deal in ?' />
            <Section padded gray className='min-h-[11em]' />
            <Section padded center className='pt-0 !bg-blue-900'>
                <div className="max-w-[1100px] w-full">
                    <Heading className='bg-blue-800 text-white p-7 sm:w-[12em] -translate-y-16 shadow-lg'>
                        Project Development
                    </Heading>

                    <div className="flex flex-col gap-10">
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='text-white min-w-[12em] font-normal  partial partial-sm'>
                                Specialization
                            </Heading>
                            <SubHeading className='text-white !text-xl font-medium'>We provide specialized project services from concept to commissioning – from pre-investment feasibility studies
                                and appraisals to development of joint ventures and company formation</SubHeading>
                        </div>
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='text-white min-w-[12em] font-normal  partial partial-sm'>
                                Professional Service
                            </Heading>
                            <SubHeading className='text-white !text-xl font-medium'>We provide professional services to international companies interested in projects in India, in areas such as
                                business and commerce, infrastructure</SubHeading>
                        </div>
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='text-white min-w-[12em] font-normal  partial partial-sm'>
                                Flexible
                            </Heading>
                            <SubHeading className='text-white !text-xl font-medium'>We provide specialized inputs, on request, to assist in the profitable and economic implementation of projects in
                                close co-operation with management heads.</SubHeading>
                        </div>
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='text-white min-w-[12em] font-normal  partial partial-sm'>
                                Assistance
                            </Heading>
                            <SubHeading className='text-white !text-xl font-medium'>We assist investment entities of the group in successfully identifying and implementing commercially viable
                                projects in India</SubHeading>
                        </div>
                    </div>
                </div>
            </Section>

            <MainHeadingSection gray={false} className='min-h-[35em]' title="We're here 24/7 to help with anything" description="It was popularised in the 1960s with the release of Letraset sheets containing.">
                <div className="flex gap-8 mt-20 flex-col sm:flex-row flex-wrap items-center justify-center">
                    <ContactCard icon="headphones" description='It was popularised in the 1960s with the release of Letraset sheets' title='24/7 Email + Chat Support' />
                    <ContactCard icon="user" description='It was popularised in the 1960s with the release of Letraset sheets' title='Reach Us Directly' />
                    <ContactCard icon='clock' description='It was popularised in the 1960s with the release of Letraset sheets' title='24/7 Stay Connected' />
                </div>
            </MainHeadingSection>

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

export default ServicesPage
