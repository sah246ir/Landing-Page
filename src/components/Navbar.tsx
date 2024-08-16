import React, { useState } from 'react'
import Sidebar from './Sidebar'
import HamburgerIcon from './HamburgerIcon'

const Navbar = ({ className }: { className?: string }) => {
    const [isopen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <nav style={{zIndex:99}} className={'w-full fixed top-0 flex justify-between px-4 py-4 ' + className}>
                <h1 className='text-4xl mb-2 font-normal'>LOGO</h1>

                <HamburgerIcon isopen={isopen} setIsOpen={setIsOpen}/>
            </nav>
            <Sidebar setIsOpen={setIsOpen} isopen={isopen} />
        </>
    )
}

export default Navbar
