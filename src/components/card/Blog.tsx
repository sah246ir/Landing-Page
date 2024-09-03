import { Clock } from 'lucide-react'
import Heading from '../heading'
import SubHeading from '../SubHeading'
const img1 = require("../../img/swiss2.webp")

interface PropTypes {
    size?: "l" | "m" | "s" | "xs",
    img?: string,
    className?: string, 
    children:React.ReactNode,
    horizontal?:boolean
}
export const Blog = ({ size, img, className, children,horizontal }: PropTypes) => {
    return (
        <div className={`${size === "l" ? "sm:w-[23em]" : ""} ${size === "s" ? "sm:w-[18em]" : ""} ${size === "xs" ? "sm:w-[14em]" : ""}  ${size === "m" ? "sm:w-[20em] " : ""} relative flex flex-col ${horizontal?"sm:flex-row ":" "} sm:items-center ${className}`}>
            <img className='sm:w-full' src={img1} alt="" />
            {children}
        </div>
    )
}
 

interface PropsTypes {
    date?: string,
    className?: string,
    children?: React.ReactNode,
}
export const BlogContent = ({ children, className = '' }: PropsTypes) => {
    return (
        <div className={className}>
            {children}
        </div>

    )
}
export const BlogTitle = ({ children, className = '' }: PropsTypes) => {
    return (
        <Heading className={'text-base font-medium my-2 text-gray-800 ' + className}>
            {children || "How well-performed SEO can benefit."}
        </Heading>

    )
}

interface BlogDateType {
    date?: string,
    icon?: boolean
    className?: string
}
export const BlogDate = ({ date, icon, className = '' }: BlogDateType) => {
    return (
        <p className={'flex items-center gap-2 mt-2 text-gray-500 text-sm ' + className}>
            {icon && <Clock size={18} />}
            {date || "June 17, 2024"}
        </p>
    )
}

export const BlogDescription = ({ children, className = '' }: PropsTypes) => {
    return (
        <SubHeading className={'text-xs text-gray-600  ' + className}>
            {children || `Having collaborated with this team for over a decade, I can
            attest to his exceptional r a decade strategic.`}
        </SubHeading>
    )
}

export const BlogAction = ({ children, className = '' }: PropsTypes) => {
    return (
        <p className={'text-sm underline cursor-pointer hover:text-black ' + className}>Read more</p>
    )
}

