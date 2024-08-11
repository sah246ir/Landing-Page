import { Copyright } from 'lucide-react'
import React from 'react'

const FooterContent = () => {
    return (
        <div className='flex flex-col text-center md:text-left md:flex-row items-center md:items-start gap-3 divide-x  divide-gray-200'>
            <div className="flex-grow px-5">
                <h1 className='text-4xl mb-2 font-normal'>LOGO</h1>
                <p className='text-gray-700 text-xs'>Lorem Ipsum has been the industry's<br />
                    standard dummy text ever since the 1500s</p>
            </div>

            <div className="flex-grow px-7">
                <h1 className='text-sm font-medium text-gray-900'>QUICK LINKS</h1>
                <ul className='py-2'>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">Home</a>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">About Us</a>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">Services</a>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="flex-grow px-7  ">
                <h1 className='text-sm font-medium text-gray-900'>QUICK LINKS</h1>
                <ul className='py-2'>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">Home</a>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">About Us</a>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">Services</a>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="flex-grow px-7">
                <h1 className='text-sm font-medium text-gray-900'>INFORMATION</h1>
                <ul className='py-2'>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">Privacy Policy</a>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">Term And Condition</a>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <a href="">Accessibility</a>
                    </li>
                    <li className='text-gray-500 py-1 text-sm font-light' >
                        <a href="">Industries</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterContent
