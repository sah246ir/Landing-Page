import React, { useEffect } from 'react'
import MainHeadingSection from '../components/MainHeadingSection'
import ContactCard from '../components/card/ContactCard'
import Section from '../components/Section'
import CorporateForm from '../components/ContactForms/CorporateForm'
import Heading from '../components/heading'
import StartUpForm from '../components/ContactForms/StartUpForm'
import { Mail,   MapPin , PhoneCall, Printer } from 'lucide-react'
import { Accordion } from '../components/Accordion'
import SubHeading from '../components/SubHeading'
const map = require("../img/map.jpeg")

const ContactPage = () => {
    useEffect(()=>{
        document.title = "Contact us"
      },[])
    return (
        <div>
            <MainHeadingSection img='contact.jpg' className='min-h-[35em]' title="Get in Touch" description="Have questions or need assistance? Get in touch with us today.">
                <div className="flex gap-8 mt-20 flex-col sm:flex-row flex-wrap items-center justify-center">
                    <ContactCard
                        icon="message-square-text"
                        className='pt-6 flex text-left bg-opacity-25 border-0 hover:scale-105 [&>*]:text-white'
                        iconsize={22}
                        iconClassName='translate-y-0 mb-7 size-10 !bg-white !text-black'
                        description='It was popularised in the 1960s with the release of Letraset sheets'
                        title='Chat Support'
                    />

                    <ContactCard
                        icon="book-headphones"
                        className='pt-6 flex text-left bg-opacity-25 border-0 hover:scale-105 [&>*]:text-white'
                        iconsize={22}
                        iconClassName='translate-y-0 mb-7 size-10 !bg-white !text-black'
                        description='It was popularised in the 1960s with the release of Letraset sheets'
                        title='Sales Support'
                    />

                    <ContactCard
                        icon="store"
                        className='pt-6 flex text-left bg-opacity-25 border-0 hover:scale-105 [&>*]:text-white'
                        iconsize={22}
                        iconClassName='translate-y-0 mb-7 size-10 !bg-white !text-black'
                        description='It was popularised in the 1960s with the release of Letraset sheets'
                        title='Visit us'
                    />

                    <ContactCard
                        icon="headphones"
                        className='pt-6 flex text-left bg-opacity-25 border-0 hover:scale-105 [&>*]:text-white'
                        iconsize={22}
                        iconClassName='translate-y-0 mb-7 size-10 !bg-white !text-black'
                        description='It was popularised in the 1960s with the release of Letraset sheets'
                        title='Call us'
                    />
                </div>
            </MainHeadingSection>

            {/* <Section gray={false} padded center>
                <div className="flex flex-col md:flex-row justify-between max-w-[1100px] w-full  ">
                    <div className="shadow-xl p-3">
                        <Heading className='p-4'>For Corporate  Works Contact Us</Heading>
                        <div className="mt-6 p-4">
                            <Heading className='text-xl text-gray-700 mb-4'>Contact Form</Heading>
                            <CorporateForm />
                        </div>
                    </div>
                    <div className="shadow-xl p-3">
                        <Heading className='p-4'>In a Startup Company & Want a Fund ?</Heading>

                        <div className="mt-6 p-4">
                            <Heading className='text-xl text-gray-700 mb-4'>Share Required Information</Heading>
                            <StartUpForm />
                        </div>
                    </div>

                </div>
            </Section> */}



            <Section gray={false} padded center >
                <div className="flex flex-col max-w-[1100px] gap-11 w-full relative">
                    <Heading>Contact</Heading>
                    <div className="flex gap-8 flex-wrap z-30 max-w-[500px]">
                        <div className="w-full flex flex-col gap-1.5">
                            <div className="font-medium text-gray-800">Address</div>
                            <div className="flex items-center gap-2">
                                <MapPin size={20} />
                                <p className="text-sm text-gray-800">
                                    Unit No.15, Laxmi Plaza Bldg. No. 9, Laxmi Industrial Estate,
                                    Off. New Link Road, Andheri (W), Mumbai - 400053. INDIA</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="font-medium text-gray-800">Phone no</div>
                            <div className="flex items-center gap-2">
                                <PhoneCall size={20} />
                                <p className="text-sm text-gray-800">+91 9821010765</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="font-medium text-gray-800">Fax</div>
                            <div className="flex items-center gap-2">
                                <Printer size={20} />
                                <p className="text-sm text-gray-800">+91 22 26375568</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="font-medium text-gray-800">Email</div>
                            <div className="flex items-center gap-2">
                                <Mail size={20} />
                                <p className="text-sm text-gray-800">info@classicgroup.co.in</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-[26em] z-30">
                        <Heading className='text-xl text-gray-700 mb-4'>Contact Form</Heading>
                        <CorporateForm />
                    </div>

                    <img className='absolute z-10 bottom-0 right-0 w-[45em] opacity-35' src={map} alt="city map" />
                </div>


            </Section>

            <Section padded center className='!bg-blue-900'>
                <div className="flex flex-col md:flex-row max-w-[1100px] gap-11 w-full relative">
                    <div className="">
                        <Heading className='text-white'>Frequently Asked
                            Questions</Heading>
                        <SubHeading className='mt-2 text-white'>
                            it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into
                            electronic typesetting.
                        </SubHeading>
                    </div>
                    <div className="w-[85%] flex flex-col gap-4">
                        <Accordion className='shadow-lg bg-gray-50 bg-opacity-25 rounded-xl' title='Where can I get some?'>
                            <SubHeading className='text-xl text-white'>
                                it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release
                            </SubHeading>
                        </Accordion>

                        <Accordion className='shadow-lg bg-gray-50 bg-opacity-25 rounded-xl' title='Where does it come from?'>
                            <SubHeading className='text-xl text-white'>
                                it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release
                            </SubHeading>
                        </Accordion>

                        <Accordion className='shadow-lg bg-gray-50 bg-opacity-25 rounded-xl' title=' Where does it come from?'>
                            <SubHeading className='text-xl text-white'>
                                it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release
                            </SubHeading>
                        </Accordion>

                        <Accordion className='shadow-lg bg-gray-50 bg-opacity-25 rounded-xl' title=' Where does it come from?'>
                            <SubHeading className='text-xl text-white'>
                                it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release
                            </SubHeading>
                        </Accordion>
                    </div>
                </div>
            </Section>

        </div>
    )
}

export default ContactPage
