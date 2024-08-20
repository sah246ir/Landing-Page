import React from 'react'
import MainHeadingSection from '../components/MainHeadingSection'
import ContactCard from '../components/card/ContactCard'
import Section from '../components/Section'
import CorporateForm from '../components/ContactForms/CorporateForm'
import Heading from '../components/heading'
import StartUpForm from '../components/ContactForms/StartUpForm'
import { Mail,   MapPin , PhoneCall, Printer } from 'lucide-react'
import { Accordion } from '../components/Accordion'
const map = require("../img/map.jpeg")

const ContactPage = () => {
    return (
        <div>
            <MainHeadingSection className='min-h-[35em]' title="Get in Touch" description="Have questions or need assistance? Get in touch with us today.">
                <div className="flex gap-8 mt-20 flex-col sm:flex-row flex-wrap items-center justify-center">
                    <ContactCard
                        icon="message-square-text"
                        className='pt-6 flex text-left'
                        iconsize={22}
                        iconClassName='translate-y-0 mb-7 size-10 !bg-black'
                        description='It was popularised in the 1960s with the release of Letraset sheets'
                        title='Chat Support'
                    />

                    <ContactCard
                        icon="message-square-text"
                        className='pt-6 flex text-left'
                        iconsize={22}
                        iconClassName='translate-y-0 mb-7 size-10 !bg-black'
                        description='It was popularised in the 1960s with the release of Letraset sheets'
                        title='Sales Support'
                    />

                    <ContactCard
                        icon="message-square-text"
                        className='pt-6 flex text-left'
                        iconsize={22}
                        iconClassName='translate-y-0 mb-7 size-10 !bg-black'
                        description='It was popularised in the 1960s with the release of Letraset sheets'
                        title='Visit us'
                    />

                    <ContactCard
                        icon="message-square-text"
                        className='pt-6 flex text-left'
                        iconsize={22}
                        iconClassName='translate-y-0 mb-7 size-10 !bg-black'
                        description='It was popularised in the 1960s with the release of Letraset sheets'
                        title='Call us'
                    />
                </div>
            </MainHeadingSection>

            <Section padded center>
                <div className="flex flex-col md:flex-row justify-between max-w-[1100px] w-full gap-14">
                    <div className="shadow-xl p-3">
                        <Heading>For Corporate  Works Contact Us</Heading>
                        <div className="mt-6 p-4">
                            <Heading className='text-xl text-gray-700 mb-4'>Contact Form</Heading>
                            <CorporateForm />
                        </div>
                    </div>
                    <div className="shadow-xl p-3">
                        <Heading>In a Startup Company & Want a Fund ?</Heading>

                        <div className="mt-6 p-4">
                            <Heading className='text-xl text-gray-700 mb-4'>Share Required Information</Heading>
                            <StartUpForm />
                        </div>
                    </div>

                </div>
            </Section>



            <Section padded center >
                <div className="flex flex-col max-w-[1100px] gap-11 w-full relative">
                    <Heading>Contact</Heading>
                    <div className="flex gap-8 flex-wrap">
                        <div className="w-full flex flex-col gap-1.5">
                            <div className="font-medium text-gray-800">Address</div>
                            <div className="flex items-center gap-2">
                                <MapPin size={20} />
                                <p className="text-sm text-gray-800">1916 Old York Rd. Abington, PA 19001</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="font-medium text-gray-800">Phone no</div>
                            <div className="flex items-center gap-2">
                                <PhoneCall size={20} />
                                <p className="text-sm text-gray-800">(123) 456-7890</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="font-medium text-gray-800">Fax</div>
                            <div className="flex items-center gap-2">
                                <Printer size={20} />
                                <p className="text-sm text-gray-800">(123) 456-7890</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <div className="font-medium text-gray-800">Email</div>
                            <div className="flex items-center gap-2">
                                <Mail size={20} />
                                <p className="text-sm text-gray-800">abcd123@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-[26em]">
                        <Heading className='text-xl text-gray-700 mb-4'>Contact Form</Heading>
                        <CorporateForm />
                    </div>

                    <img className='absolute -z-10 bottom-0 right-0 w-[45em] opacity-35' src={map} alt="city map" />
                </div>


            </Section>

            <Section padded center>
                <div className="flex flex-col md:flex-row max-w-[1100px] gap-11 w-full relative">
                    <div className="">
                        <Heading>Frequently Asked
                            Questions</Heading>
                        <p className='mt-2 text-sm text-gray-600'>
                            it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into
                            electronic typesetting.
                        </p>
                    </div>
                    <div className="sm:min-w-[32em] flex flex-col gap-4">
                        <Accordion className='shadow-lg bg-gray-50' title='Where can I get some?'>
                            <p className='text-sm text-gray-600'>
                                it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release
                            </p>
                        </Accordion>

                        <Accordion className='shadow-lg bg-gray-50' title='Where does it come from?'>
                            <p className='text-sm text-gray-600'>
                                it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release
                            </p>
                        </Accordion>

                        <Accordion className='shadow-lg bg-gray-50' title=' Where does it come from?'>
                            <p className='text-sm text-gray-600'>
                                it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release
                            </p>
                        </Accordion>

                        <Accordion className='shadow-lg bg-gray-50' title=' Where does it come from?'>
                            <p className='text-sm text-gray-600'>
                                it to make a type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release
                            </p>
                        </Accordion>
                    </div>
                </div>
            </Section>

        </div>
    )
}

export default ContactPage
