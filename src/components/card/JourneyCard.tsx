import React from 'react'
import Heading from '../heading'

interface PropTypes{
    className?:string
    year:number
}
const JourneyCard = ({className,year}:PropTypes) => {
  return (
    <div className={'bg-white text-left p-4 shadow rounded ' + className}>
      <Heading className='mb-2 text-xl text-gray-700' >
        {year}
      </Heading>
      <p className='text-sm text-gray-500'>
        Lorem ipsum dolor sit amet consectetur sit elit. Odio, dolorum culpa iste eligendi voluptatum eveniet.
      </p>
    </div>
  )
}

export default JourneyCard
