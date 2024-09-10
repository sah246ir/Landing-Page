import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

interface PropTypes {
    className?: string;
    children: React.ReactNode;
    title: string;
} 

export const Accordion = ({ className,children, title }: PropTypes) => {
    const [open,Setopen] = useState<boolean>(false)
    return (
        <div className={`p-2 px-4 ${className}`}>
            <div onClick={()=>Setopen(prev=>!prev)} className="flex justify-between text-white text-lg">
                <p>{title}</p>
                <i className={`transition duration-500 ${open?"rotate-180":"rotate-0"}`}><ChevronDown  /></i>
            </div>

            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                open?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0 "
            }`}>
                <div className='overflow-hidden'>
                    <div className="py-2">{children && children}</div>
                </div>  
            </div>
        </div>
    );
};

 