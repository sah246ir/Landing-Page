import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import HamburgerIcon from './HamburgerIcon'
const logo = require("../img/logo.jpg")
const Navbar = ({ className }: { className?: string }) => {
    const [isopen, setIsOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Sidebar setIsOpen={setIsOpen} isopen={isopen} />
            <nav className={`w-full fixed z-50   top-0 flex justify-between items-center px-4 py-1.5 bg-white ` + className}>
                <div><img alt='' width={scrolled?75:115} src={logo} className='text-4xl font-normal transition-all duration-300' />  </div>
                <HamburgerIcon isopen={isopen} setIsOpen={setIsOpen}/>
            </nav>
        </>
    )
}

export default Navbar
