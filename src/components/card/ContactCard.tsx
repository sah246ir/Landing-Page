import { Contact } from 'lucide-react'
import React from 'react'

interface PropTypes{
    title:string,
    description:string
    className?:string
}
const ContactCard = ({title,description,className}:PropTypes) => {
    return (
        <div className={'border p-6 bg-white sm:w-[15em] grid place-items-center pt-0  flex-col gap-3 rounded-lg ' + className}>

            <i className='size-16 bg-gray-300 text-white grid place-items-center rounded-full -translate-y-6'>
                <span className="sr-only">Contact icon</span>
                <Contact className='text-gray- ' size={35} />
            </i>

            <h1 className='font-semibold mt-[-1.5rem]'>{title}</h1>
            <p className='text-xs'>{description}</p>
        </div>

    )
}

export default ContactCard
