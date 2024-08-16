import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between px-12 py-4'>
            <h1 className='text-4xl mb-2 font-normal'>LOGO</h1>
            <div className="flex flex-col justify-between w-10 h-8 p-1">
                <div className="rounded-l-full rounded-r-full bg-black h-[4px] w-full"></div>
                <div className="rounded-l-full rounded-r-full bg-black h-[4px] w-full"></div>
                <div className="rounded-l-full rounded-r-full bg-black h-[4px] w-full"></div>
            </div>
        </div>
    )
}

export default Navbar
