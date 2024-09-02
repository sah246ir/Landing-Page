import React, { useState } from 'react'
import Sidebar from './Sidebar'
import HamburgerIcon from './HamburgerIcon'
const logo = require("../img/logo.jpg")
const Navbar = ({ className }: { className?: string }) => {
    const [isopen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <nav className={'w-full   top-0 flex justify-between px-4 py-2 ' + className}>
                <img width={115} src={logo} className='text-4xl font-normal' /> 

                <HamburgerIcon isopen={isopen} setIsOpen={setIsOpen}/>
            </nav>
            <Sidebar setIsOpen={setIsOpen} isopen={isopen} />
        </>
    )
}

export default Navbar
