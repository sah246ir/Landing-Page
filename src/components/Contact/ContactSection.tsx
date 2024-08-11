import React from 'react'
import LeftContact from './LeftContact'
import RightContact from './RightContact'

const ContactSection = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[100%] lg:w-[1100px] flex text-center md:text-left items-center md:items-start md:justify-between p-5 md:flex-row flex-col'>
        <LeftContact />
        <RightContact />
      </div>
    </div>
  )
}

export default ContactSection
