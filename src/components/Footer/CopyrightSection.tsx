import { Copyright, LucideFacebook, LucideInstagram, LucideLinkedin, LucideTwitter } from 'lucide-react'
import Button from '../Button'

const CopyrightSection = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1100px] flex-grow flex justify-between p-4 items-center">
        <p className='text-gray-600 text-xs'>
          <Copyright size={12} className='inline' />&nbsp;
          2024 Classicgroup. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Button className='!p-0 rounded-full size-6 grid place-items-center'>
            <LucideLinkedin fill='black' size={12} strokeWidth={.1} />
          </Button>
          <Button className='!p-0 rounded-full size-6 grid place-items-center'>
            <LucideFacebook fill='black' size={12} strokeWidth={.1} />
          </Button>
          <Button className='!p-0 rounded-full size-6 grid place-items-center'>
            <LucideTwitter fill='black' size={12} strokeWidth={.1} />
          </Button>
          <Button className='!p-0 rounded-full size-6 grid place-items-center'>
            <LucideInstagram size={12} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CopyrightSection
