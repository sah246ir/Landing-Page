import { Contact,  } from 'lucide-react'
import React, { lazy, Suspense } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import SubHeading from '../SubHeading';
import Heading from '../heading';

interface PropTypes {
    title: string,
    description: string
    className?: string
    iconClassName?: string
    icon?: keyof typeof dynamicIconImports,
    iconsize?:number
}

const fallback = <Contact strokeWidth={1.2} size={35} />
const ContactCard = ({ title, description, className, iconClassName, icon,iconsize }: PropTypes) => {
    const LucideIcon = icon ? lazy(dynamicIconImports[icon]) : undefined;
    return (
        <div className={'border p-6 bg-white sm:w-[15em] pt-0  flex-col gap-3 rounded-lg grid place-items-center transition duration-300 ' + className}>

                <i className={'size-16 bg-gray-300 text-white grid place-items-center rounded-full -translate-y-6 ' + iconClassName}>
                    <span className="sr-only">Contact icon</span>
                    <Suspense fallback={fallback}>
                     {LucideIcon?<LucideIcon strokeWidth={1.2} size={iconsize || 35} />:<Contact strokeWidth={1.2} size={iconsize || 35} />  }
                    </Suspense>
                </i>

            <Heading className='font-semibold text-base mt-[-1.5rem] text-gray-800'>{title}</Heading>
            <SubHeading className='text-xs'>{description}</SubHeading>
        </div>

    )
}

export default ContactCard
