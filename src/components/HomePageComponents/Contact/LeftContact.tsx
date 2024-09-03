import { LocateFixedIcon, MailOpen, PhoneCallIcon } from 'lucide-react'
import Heading from '../../heading'

const LeftContact = () => {
  return (
    <div className=''>
      <div>
        <h1 className='tracking-widest mb-3'>CONTACT US</h1>
        <Heading className='text-4xl font-semibold tracking-wider'>
          We Look<br/> 
          Forward to You</Heading>

        <p className='text-gray-600 text-xs mt-3 tracking-wider'>Lorem Ipsum has been the industry's standard<br />
          dummy text ever since the 1500s.</p>
      </div>

      <hr className="my-5 bg-gray-600 h-[2px] w-[55%]" />

      <div className='flex flex-col gap-4 p-3'>
        <p className='text-sm'>
          <PhoneCallIcon fill='black' className='inline' size={17} />&nbsp;&nbsp;&nbsp;
          +123(456)789
        </p>
        <p className='text-sm'>
          <MailOpen fill='black' className='inline' size={17} />&nbsp;&nbsp;&nbsp;
          abc@gmail.com
        </p>
        <p className='text-sm'>
          <LocateFixedIcon fill='black' className='inline' size={17} />&nbsp;&nbsp;&nbsp;
          Address
        </p>
      </div>
    </div>
  )
}

export default LeftContact
