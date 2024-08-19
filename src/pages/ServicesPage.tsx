import React from 'react'
import MainHeadingSection from '../components/MainHeadingSection'
import Section from '../components/Section'
import Heading from '../components/heading'
import Button from '../components/Button'
import ContactCard from '../components/card/ContactCard'
const img1 = require("../img/swiss2.webp")

const ServicesPage = () => {
    return (
        <div>
            <MainHeadingSection title='Our Services' description='it to make a type specimen book. It has survived not only five centuries' />
            <Section padded center>
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
            </Section>

            <Section padded gray className='min-h-[15em]' />

            <Section padded center className='pt-0'>
                <div className="max-w-[1100px] w-full">
                    <Heading className='bg-gray-400 text-white p-7 sm:w-[12em] -translate-y-16'>
                        Strategy<br />
                        Management
                    </Heading>

                    <div className="flex flex-col gap-10">
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='min-w-[12em] font-normal  partial partial-sm'>
                                Demo Title
                            </Heading>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi quis dolorem nulla facilis repudiandae perferendis totam maxime inventore debitis! Odio, nisi fugit rem blanditiis iste iure animi cumque atque.</p>
                        </div>
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='min-w-[12em] font-normal  partial partial-sm'>
                                Demo Title
                            </Heading>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi quis dolorem nulla facilis repudiandae perferendis totam maxime inventore debitis! Odio, nisi fugit rem blanditiis iste iure animi cumque atque.</p>
                        </div>
                        <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                            <Heading className='min-w-[12em] font-normal  partial partial-sm'>
                                Demo Title
                            </Heading>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores commodi quis dolorem nulla facilis repudiandae perferendis totam maxime inventore debitis! Odio, nisi fugit rem blanditiis iste iure animi cumque atque.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <MainHeadingSection className='min-h-[35em]' title="We're here 24/7 to help with anything" description="It was popularised in the 1960s with the release of Letraset sheets containing.">
                <div className="flex gap-8 mt-20 flex-col sm:flex-row flex-wrap items-center justify-center">
                    <ContactCard description='It was popularised in the 1960s with the release of Letraset sheets' title='24/7 Email + Chat Support' />
                    <ContactCard description='It was popularised in the 1960s with the release of Letraset sheets' title='Reach Us Directly' />
                    <ContactCard description='It was popularised in the 1960s with the release of Letraset sheets' title='24/7 Stay Connected' />
                </div>
            </MainHeadingSection>

            <Section padded style={{ marginInline: "auto" }} className="  max-w-[1000px] flex-col items-center gap-5">
                <Heading className='text-center !mb-0'>
                    How Can We Help You?
                </Heading>
                <p className='text-center text-sm text-gray-600'>It was popularised in the 1960s with the release of Letraset sheets containing</p>

                <Button className='bg-black text-white rounded-full font-normal'>
                    Contact Us
                </Button>

            </Section>
        </div>
    )
}

export default ServicesPage
