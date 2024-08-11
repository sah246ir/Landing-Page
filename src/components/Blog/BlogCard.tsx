import { Clock } from 'lucide-react'
const img = require("../../img/swiss2.webp")
const img2 = require("../../img/swiss.jpg")

interface PropTypes {
    size: "l" | "m" | "s"
}
const BlogCard = ({ size }: PropTypes) => {
    return (
        <div className={`${size==="l" && "w-[145em]"} ${size==="s" && "w-[60em]"} ${size==="m" && "w-[75em] mb-10 "} relative`}>

            <img className='w-full' src={size==="l"?img:img2} alt="" />
            <p className='flex items-center gap-2 mt-2 text-gray-500 text-sm'>
                <Clock size={18}/>
                June 17, 2024
            </p>
            <h1 className='font-medium my-2 text-gray-800'>How well-performed SEO can benefit.</h1>

            {size==="l" && <p className='text-xs text-gray-600 mb-10'>Having collaborated with this team for over a decade, I can
                attest to his exceptional r a decade strategic.
            </p>}
        </div>
    )
}

export default BlogCard
