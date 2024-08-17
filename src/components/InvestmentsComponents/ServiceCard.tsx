import { GaugeCircle } from 'lucide-react'
import React from 'react'
import Heading from '../heading'

const ServiceCard = () => {
    return (
        <div className='transition flex flex-col gap-2 bg-gray-50 border border-gray-300 p-4 py-6 sm:w-[13em] hover:bg-white'>
            <GaugeCircle className='text-gray-500' size={30} />
            <Heading className='font-normal text-lg !m-0'>Demo Service</Heading>
            <p className='text-xs text-gray-600' >Are you doing the same tasks
                repeatedly? Leave it with us,
                we'll put a robot in place to do it
                for you!</p>
        </div>
    )
}

export default ServiceCard
