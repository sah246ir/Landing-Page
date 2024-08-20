import React from 'react'

interface PropTypes {
    placeholder: string
    type: string
    name: string
    id: string
    className?: string
}
const Input = ({ className, type, name, id, placeholder }: PropTypes) => {
    return (
        <input className={'border border-black px-2 py-1.5 ' + className}
            placeholder={placeholder}
            type={type}
            name={name}
            id={id} />
    )
}

interface GroupPropTypes extends PropTypes {
    labelClassName?: string
    inputClassName?: string
    label?: string

}
export const InputGroup = ({ className, type, name, id, placeholder, labelClassName, inputClassName, label }: GroupPropTypes) => {
    return (
        <div className={'flex flex-col gap-1 ' + className}>
            <label className={'text-md text-gray-700 font-light ' + labelClassName} htmlFor={id}>{label}</label>
            <input className={'border border-black px-2 py-1.5 ' + inputClassName}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id} />
        </div>
    )
}

export default Input
