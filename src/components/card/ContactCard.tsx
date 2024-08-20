import { Contact,  } from 'lucide-react'
import React, { lazy, Suspense } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface PropTypes {
    title: string,
    description: string
    className?: string
    iconClassName?: string
    icon?: keyof typeof dynamicIconImports
}

const fallback = <Contact strokeWidth={1.2} size={35} />
const ContactCard = ({ title, description, className, iconClassName, icon }: PropTypes) => {
    const LucideIcon = icon ? lazy(dynamicIconImports[icon]) : undefined;
    return (
        <div className={'border p-6 bg-white sm:w-[15em] grid place-items-center pt-0  flex-col gap-3 rounded-lg ' + className}>

                <i className={'size-16 bg-gray-300 text-white grid place-items-center rounded-full -translate-y-6 ' + iconClassName}>
                    <span className="sr-only">Contact icon</span>
                    <Suspense fallback={fallback}>
                     {LucideIcon?<LucideIcon strokeWidth={1.2} size={35} />:fallback  }
                    </Suspense>
                </i>

            <h1 className='font-semibold mt-[-1.5rem]'>{title}</h1>
            <p className='text-xs'>{description}</p>
        </div>

    )
}

export default ContactCard
