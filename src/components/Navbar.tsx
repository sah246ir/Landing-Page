import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Navbar = ({ className }: { className?: string }) => {
    const [isopen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <nav className={'flex justify-between px-4 py-4 ' + className}>
                <h1 className='text-4xl mb-2 font-normal'>LOGO</h1>

                <div onClick={() => setIsOpen(prev => !prev)} className="flex items-center gap-1 z-40 cursor-pointer">
                    <div className="flex flex-col justify-between w-9 h-7 p-1">
                        <div className="rounded-l-full rounded-r-full bg-gray-800 h-[2px] w-full"></div>
                        <div className="rounded-l-full rounded-r-full bg-gray-800 h-[2px] w-full"></div>
                        <div className="rounded-l-full rounded-r-full bg-gray-800 h-[2px] w-full"></div>
                    </div>
 



                    <p className='tracking-widest text-gray-800'>MENU</p>
                </div>
            </nav>
            <Sidebar isopen={isopen} />
        </>
    )
}

export default Navbar
