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
        <input className={'border border-gray-400 px-2 py-1.5 rounded-sm ' + className}
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
            <label className={'text-md text-blue-800 font-medium ' + labelClassName} htmlFor={id}>{label}</label>
            {type!=="file" && <Input className={'border border-gray-400 px-2 py-1.5 rounded-sm ' + inputClassName}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id} />}

            {type==="file" && 
            <Input className={'border border-gray-400 px-2 py-1.5 rounded-sm ' + inputClassName}
                placeholder={placeholder}
                type={type}
                name={name}
                id={id} />
            }
        </div>
    )
}

interface TextareaProps extends Omit<PropTypes, "type"> {
    rows?: number
}
export const Textarea = ({ className, rows, name, id, placeholder }: TextareaProps) => {
    return (
        <textarea className={'border border-gray-400 px-2 py-1.5 rounded-sm ' + className}
            placeholder={placeholder}
            name={name}
            id={id}
            rows={rows}
        />
    )
}

interface TextareaGroupPropTypes extends TextareaProps {
    labelClassName?: string
    inputClassName?: string
    label?: string

}
export const TextareaGroup = ({ className, rows, name, id, placeholder, labelClassName, inputClassName, label }: TextareaGroupPropTypes) => {
    return (
        <div className={'flex flex-col gap-1 ' + className}>
            <label className={'text-md text-gray-600 font-medium ' + labelClassName} htmlFor={id}>{label}</label>
            <Textarea className={'border border-gray-400 px-2 py-1.5 rounded-sm ' + inputClassName}
                placeholder={placeholder}
                rows={rows}
                name={name}
                id={id} />
        </div>
    )
}


export default Input
