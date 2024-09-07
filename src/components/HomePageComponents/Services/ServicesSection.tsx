import { useState } from 'react'
import { ArrowButton } from '../../Button'
import ServiceCard from './ServiceCard'
import Section from '../../Section'
import Heading from '../../heading'
const ServiceSection = () => {
    const services = [
        [
            {heading:"Construction Excellence",subheading:"We specialize in delivering high-quality construction projects that blend precision with innovation, ensuring every detail meets the highest standards.",img:"construction.jpg"},
            {heading:"Innovative Design",subheading:"Our design services focus on creating visionary spaces that combine functionality with aesthetic appeal, setting new benchmarks for creativity and sustainability.",img:"design.jpg"},
        ],
        [
            {heading:" Project Management",subheading:"From inception to completion, our expert project management team ensures smooth operations, timely delivery, and exceptional results, keeping your project on track and within budget.",img:"project.jpg"},
            {heading:"Sustainable Solutions",subheading:"We are committed to incorporating eco-friendly practices and materials into our projects, aiming to create sustainable and energy-efficient environments that benefit both clients and the planet.",img:"sustainable.jpg"},
        ]
    ]
    const [idx, setIdx] = useState<number>(0)

    const gonext = () => {
        setIdx(prev => {
            if (prev === services.length - 1) {
                return 0
            }
            return prev + 1
        })
    }
    const goprev = () => {
        setIdx(prev => {
            if (prev === 0) {
                return services.length - 1
            }
            return prev - 1
        })
    }
    return (
        <Section padded gray className='mb-10 flex justify-center'>
            <div className="w-[1100px] justify-center overflow-hidden">
                <div className="p-5 flex sm:flex-row gap-5 sm:items-end justify-between flex-col items-center text-center sm:text-left">
                    <div>
                        <h1 className='tracking-wider mb-2'>WHAT WE PROVIDE</h1>
                        <Heading className='text-5xl font-semibold'>
                            Our Services
                        </Heading>
                    </div>
                    <div className='flex gap-1'>
                        <ArrowButton onClick={goprev} size={55} direction='l' />
                        <ArrowButton onClick={gonext} size={55} direction='r' />
                    </div>
                </div>
                <div className="flex w-full">
                    {services.map(servicegroup => {
                        return (
                            <div style={{translate:`${-100*idx}%`,transition:"translate 700ms ease-in-out"}} className="flex justify-center min-w-full gap-7 p-5">
                                {servicegroup.map(service=>{
                                    return(
                                         <ServiceCard cardimg={service.img} heading={service.heading} subheading={service.subheading}/>

                                    )
                                })} 
                            </div>
                        )
                    })}
                </div>
            </div>

        </Section>
    )
}

export default ServiceSection
