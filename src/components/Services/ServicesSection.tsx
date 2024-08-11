import { useState } from 'react'
import { ArrowButton } from '../Button'
import ServiceCard from './ServiceCard'
const ServiceSection = () => {
    const len = ["", "", ""]
    const [idx, setIdx] = useState<number>(0)

    const gonext = () => {
        setIdx(prev => {
            if (prev === len.length - 1) {
                return 0
            }
            return prev + 1
        })
    }
    const goprev = () => {
        setIdx(prev => {
            if (prev === 0) {
                return len.length - 1
            }
            return prev - 1
        })
    }
    return (
        <div className='py-12 mb-10 flex justify-center'>
            <div className="w-[1100px] justify-center overflow-hidden">
                <div className="p-5 flex items-end justify-between">
                    <div>
                        <h1 className='tracking-wider mb-2'>WHAT WE PROVIDE</h1>
                        <h2 className='text-5xl font-semibold'>
                            Our Services
                        </h2>
                    </div>
                    <div className='flex gap-1'>
                        <ArrowButton onClick={goprev} size={55} direction='l' />
                        <ArrowButton onClick={gonext} size={55} direction='r' />
                    </div>
                </div>
                <div className="flex w-full">
                    {len.map(_ => {
                        return (
                            <div style={{translate:`${-100*idx}%`,transition:"translate 700ms ease-in-out"}} className="flex justify-center min-w-full gap-7 p-5">
                                <ServiceCard />
                                <ServiceCard />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default ServiceSection
