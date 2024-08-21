import React from 'react'
import Heading from '../heading'
import Button  from '../Button'
import { ArrowRight } from 'lucide-react'

const OpenPositionCard = () => {
  return (
    <div className='flex justify-between items-center w-full p-5 flex-wrap gap-4'>
      <div className="text-left">
        <Heading className='text-gray-800'>Job Title</Heading>
        <p className='text-sm text-gray-700'>
            it to make a type specimen book. It has survived not only five centuries.
        </p>
      </div>

      <Button className='group rounded-full bg-black text-white !font-light'>
        Apply Now&nbsp;
        <ArrowRight strokeWidth={1.3} className='inline transition duration-300 group-hover:translate-x-2' />
      </Button>
    </div>
  )
}

export default OpenPositionCard
