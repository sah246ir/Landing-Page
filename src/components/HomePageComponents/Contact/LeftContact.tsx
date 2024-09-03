import { LocateFixedIcon, MailOpen, PhoneCallIcon } from 'lucide-react'
import Heading from '../../heading'
import SubHeading from '../../SubHeading'

const LeftContact = () => {
  return (
    <div className=''>
      <div>
        <h1 className='tracking-widest mb-3'>CONTACT US</h1>
        <Heading className='text-4xl font-semibold tracking-wider'>
          We Look<br/> 
          Forward to You</Heading>

        <SubHeading className='text-xs mt-3 tracking-wider'>Lorem Ipsum has been the industry's standard<br />
          dummy text ever since the 1500s.</SubHeading>
      </div>

      <hr className="my-5 bg-gray-600 h-[2px] w-[55%]" />

      <div className='flex flex-col gap-4 p-3'>
        <SubHeading className='text-sm'>
          <PhoneCallIcon fill='black' className='inline' size={17} />&nbsp;&nbsp;&nbsp;
          +123(456)789
        </SubHeading>
        <SubHeading className='text-sm'>
          <MailOpen fill='black' className='inline' size={17} />&nbsp;&nbsp;&nbsp;
          abc@gmail.com
        </SubHeading>
        <SubHeading className='text-sm'>
          <LocateFixedIcon fill='black' className='inline' size={17} />&nbsp;&nbsp;&nbsp;
          Address
        </SubHeading>
      </div>
    </div>
  )
}

export default LeftContact
