import React, { useState, useEffect } from 'react';

interface PropsTypes {
    isopen: boolean;
    setIsOpen: Function;
}

const HamburgerIcon = ({ isopen, setIsOpen }: PropsTypes) => {
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
        <div 
            onClick={() => setIsOpen((prev: boolean) => !prev)} 
            className={`transition duration-300 z-50 fixed right-0 top-0 flex items-center gap-2 cursor-pointer ${scrolled || isopen?"bg-white":"bg-white"} p-4`}
        >
            <div className={`relative flex flex-col items-center justify-center ${scrolled?"w-7 h-5":"w-9 h-6"} p-1`}>
                <div
                    className={`transition-transform duration-300 absolute rounded-l-full rounded-r-full  h-[2px] w-full ${isopen ? "bg-red-800 rotate-45 top-3" : "top-0 bg-blue-900"}`}
                ></div>
                <div
                    className={`absolute rounded-l-full rounded-r-full  h-[2px] w-full ${isopen ? "opacity-0" : "opacity-100 bg-blue-900"}`}
                ></div>
                <div
                    className={`transition-transform duration-300 absolute rounded-l-full rounded-r-full  h-[2px] w-full ${isopen ? "bg-red-800 -rotate-45 top-3" : "bottom-0 bg-blue-900"}`}
                ></div>
            </div>
            {!scrolled && (
                <p className={`tracking-widest ${isopen?"text-red-800":"text-blue-900"}`}>
                    {isopen ? "CLOSE" : "MENU"}
                </p>
            )}
        </div>
    );
}

export default HamburgerIcon;
