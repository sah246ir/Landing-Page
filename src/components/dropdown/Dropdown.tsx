import React, { createContext, SetStateAction, useState, Dispatch } from 'react'

interface ContextType {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

interface PropTypes {
    children: React.ReactNode
    className?: string
}
export const DropdownContext = createContext<ContextType | null>(null)
const Dropdown = ({ children, className }: PropTypes) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <DropdownContext.Provider value={{ open, setOpen }}>
            <div className='flex flex-col'>{children}</div>
        </DropdownContext.Provider>
    )
}

export default Dropdown

