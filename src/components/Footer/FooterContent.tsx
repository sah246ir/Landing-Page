import React from 'react'
import SubHeading from '../SubHeading'
import { Link } from 'react-router-dom'
const logo = require("../../img/logo.png")
const FooterContent = () => {
    return (
        <div className='flex flex-col text-center md:text-left md:flex-row items-center md:items-start gap-3 divide-x  divide-blue-900'>
            <div className="flex-grow ">
                <img alt='' width={200} src={logo} className='text-4xl font-normal mb-2' /> 
                <SubHeading className='text-xs text-white'>Lorem Ipsum has been the industry's<br />
                    standard dummy text ever since the 1500s</SubHeading>
            </div>

            <div className="flex gap-5">
                <div className="flex-grow px-5">
                    <h1 className='text-sm font-medium text-white'>QUICK LINKS</h1>
                    <ul className='py-2'>
                        <li className='text-gray-300 py-1 text-sm'>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className='text-gray-300 py-1 text-sm'>
                            <Link to={"/about-us"}>About Us</Link>
                        </li>
                        <li className='text-gray-300 py-1 text-sm'>
                            <Link to={"/services"}>Services</Link>
                        </li>
                        <li className='text-gray-300 py-1 text-sm'>
                            <Link to={"/contact-us"}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-grow px-5">
                    <h1 className='text-sm font-medium text-white'>INFORMATION</h1>
                    <ul className='py-2'>
                        <li className='text-gray-300 py-1 text-sm'>
                            <p>Privacy Policy</p>
                        </li>
                        <li className='text-gray-300 py-1 text-sm'>
                            <p>Term And Condition</p>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterContent
