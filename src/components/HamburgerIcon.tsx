import React from 'react'

interface PropsTypes{
    isopen:boolean,
    setIsOpen:Function
}
const HamburgerIcon = ({isopen,setIsOpen}:PropsTypes) => {
    return (
        <div style={{zIndex:99}} onClick={() => setIsOpen((prev: boolean) => !prev)} className="relative flex items-center gap-2 cursor-pointer">
            <div className="relative flex flex-col items-center justify-center w-9 h-6 p-1">
                <div
                    className={`transition-transform duration-300 absolute rounded-l-full rounded-r-full bg-gray-800 h-[2px] w-full ${isopen ? "rotate-45 top-3" : "top-0"}`}
                ></div>
                <div
                    className={` absolute rounded-l-full rounded-r-full bg-gray-800 h-[2px] w-full ${isopen ? "opacity-0" : "opacity-100"}`}
                ></div>
                <div
                    className={`transition-transform duration-300 absolute rounded-l-full rounded-r-full bg-gray-800 h-[2px] w-full ${isopen ? "-rotate-45 top-3" : "bottom-0"}`}
                ></div>
            </div>
            <p className='tracking-widest text-gray-800'>
                {isopen ? "CLOSE" : "MENU"}
            </p>
        </div>
    )
}

export default HamburgerIcon
