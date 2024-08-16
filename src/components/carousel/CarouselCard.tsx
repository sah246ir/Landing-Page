import { Children } from 'react'
import Button from '../Button'
const img = require("../../img/swiss2.webp")

interface PropTypes{
    translate:`${number}%`,
    children?:React.ReactNode,
}
const CarouselCard = ({ children,translate}:PropTypes) => {
    return (
        <div style={{translate,transition:"translate 700ms ease-in-out"}} className="flex items-center min-w-full flex-col sm:flex-row">
            {children && children}
        </div>
    )
}

export default CarouselCard
