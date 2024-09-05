import { ArrowButton } from '../../Button'
import SubHeading from '../../SubHeading'
const img = require("../../../img/swiss2.webp")

interface Proptypes{
    cardimg?:any
    heading:string
    subheading:string
}
const ServiceCard = ({heading,subheading,cardimg}:Proptypes) => {
    const immg = cardimg?require(`../../../img/${cardimg}`):undefined
    return (
        <div className="w-[100%] relative">
            <div className="absolute bottom-0 left-0">
                <ArrowButton
                    size={35}
                    direction='r'
                    className='-rotate-45'
                />
            </div>
            <img className='w-full max-h-[260px] h-[260px] object-cover' src={immg || img} alt="" />
            <h1 className='font-medium my-2 text-gray-800'>{heading}</h1>
            <SubHeading className='text-xs mb-10'>{subheading}</SubHeading>
        </div>
    )
}

export default ServiceCard
