import React from 'react'
import SubHeading from '../SubHeading'
const logo = require("../../img/logo.jpg")
const FooterContent = () => {
    return (
        <div className='flex flex-col text-center md:text-left md:flex-row items-center md:items-start gap-3 divide-x  divide-gray-200'>
            <div className="flex-grow px-5">
                <img alt='' width={200} src={logo} className='text-4xl font-normal mb-2' /> 
                <SubHeading className='text-xs'>Lorem Ipsum has been the industry's<br />
                    standard dummy text ever since the 1500s</SubHeading>
            </div>

            <div className="flex-grow px-7">
                <h1 className='text-sm font-medium text-gray-900'>QUICK LINKS</h1>
                <ul className='py-2'>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>Home</p>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>About Us</p>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>Services</p>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>

            <div className="flex-grow px-7  ">
                <h1 className='text-sm font-medium text-gray-900'>QUICK LINKS</h1>
                <ul className='py-2'>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>Home</p>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>About Us</p>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>Services</p>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>

            <div className="flex-grow px-7">
                <h1 className='text-sm font-medium text-gray-900'>INFORMATION</h1>
                <ul className='py-2'>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>Privacy Policy</p>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>Term And Condition</p>
                    </li>
                    <li className='text-gray-500 py-1 text-sm'>
                        <p>Accessibility</p>
                    </li>
                    <li className='text-gray-500 py-1 text-sm font-light' >
                        <p>Industries</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterContent
