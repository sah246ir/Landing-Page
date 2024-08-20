import React from 'react'

interface PropTypes{
    size:"sm"|"lg"
    className?:string
}
const TestimonialCard = ({size,className}:PropTypes) => {
  return (
    <div className={`transition-all duration-500 bg-gray-400 ${size==="sm"?"w-[10em] h-[12.5em]":"w-[14em] h-[22em]"} ${className}`}>
      
    </div>
  )
}

export default TestimonialCard
