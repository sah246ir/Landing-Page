import React, { useState } from 'react'
import Sidebar from './Sidebar'
import HamburgerIcon from './HamburgerIcon'

const Navbar = ({ className }: { className?: string }) => {
    const [isopen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <nav className={'w-full   top-0 flex justify-between px-4 py-2 ' + className}>
                <h1 className='text-4xl font-normal'>LOGO</h1>

                <HamburgerIcon isopen={isopen} setIsOpen={setIsOpen}/>
            </nav>
            <Sidebar setIsOpen={setIsOpen} isopen={isopen} />
        </>
    )
}

export default Navbar
