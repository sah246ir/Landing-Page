import React from 'react'
import useCarousel from '../hooks/useCarousel'
import Section from '../components/Section'
import { ArrowButton } from '../components/Button'
import LeaderCard from '../components/card/LeaderCard'
import MainHeadingSection from '../components/MainHeadingSection'
import JourneyCard from '../components/card/JourneyCard'
import Marker from '../components/Marker'
const img = require("../img/ceo.jpg")
const img2 = require("../img/swiss2.webp")

const AboutPage = () => {
    const years = [2021, 2022, 2023, 2024]
    const { goprev, gonext, translate } = useCarousel({
        cards: 2
    })
    return (
        <div>
            <Section padded center className='min-h-[55em]'>
                <div className='w-full flex flex-col justify-center items-center gap-12'>
                    <div className="max-w-[1100px] flex flex-col sm:flex-row justify-between w-full items-center ">
                        <div>
                            <h1 className='tracking-wider mb-2'>ABOUT US</h1>
                            <h2 className='text-5xl font-semibold mb-4'>
                                Our Delivery<br />
                                Speaks For Itself
                            </h2>
                        </div>
                        <p className='max-w-[25em] text-gray-700 text-sm'>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages.It
                            was popularised in the 1960s with the release
                        </p>
                    </div>

                    <div className="max-w-[1100px]  flex gap-4 flex-col sm:flex-row">
                        <img style={{ objectFit: "cover" }} className='w-full max-h-[400px]' src={img2} alt="" />
                        <img style={{ objectFit: "cover" }} className='sm:w-[45%]' src={img} alt="" />
                    </div>
                </div>


            </Section>

            <Section gray={false} padded center className='min-h-[35em]' >
                <div className="w-[1100px] flex items-center justify-center gap-11 flex-col sm:flex-row text-center sm:text-left">
                    <div className="">
                        <img className='w-full' src={img} alt="" />
                    </div>
                    <div className="sm:w-[55em]">
                        <h2 className='text-5xl font-mediumfs mb-4'>
                            Vinit Story
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


            <MainHeadingSection title='Our Journey' description='t was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.It was popularised in the 1960s with the release.'>
                <div className='w-full flex flex-col md:items-center justify-center bg-gray-50 min-h-96 text-center max-w-[1100px]'>
                    <div className="mt-5 flex justify-start items-start">
                        <div className="w-[5px]  h-full py-12 bg-gray-500 flex flex-col overflow-visible  items-start justify-around gap-11">
                            {
                                years.map((yr, i) => {
                                    const even = i%2===0
                                    return (
                                        <div className={'relative flex items-center justify-start gap-4 ' + (even?"md:flex-row-reverse md:-translate-x-full":"")}>
                                            <Marker concentricSize={.65} color='gray' className={"size-[25px] -translate-x-[10px] "+(even?"md:translate-x-[14.5px]":"")} />
                                            <JourneyCard year={yr} className="sm:w-[30em]" />
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
                            <h2 className='text-5xl font-semibold'>
                                Our Leaders
                            </h2>
                        </div>
                        <div className='flex gap-1'>
                            <ArrowButton onClick={goprev} size={55} direction='l' />
                            <ArrowButton onClick={gonext} size={55} direction='r' />
                        </div>
                    </div>
                    <div className="flex w-full">
                        {[1, 1].map(_ => {
                            return (
                                <div style={{ translate, transition: "translate 700ms ease-in-out" }} className="flex justify-center min-w-full gap-7 p-5">
                                    <LeaderCard />
                                    <LeaderCard />
                                    <LeaderCard />
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
