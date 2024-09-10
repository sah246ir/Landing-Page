import Button from "../../Button"
import Heading from "../../heading"
import SubHeading from "../../SubHeading"

const tmimg = require("../../../img/swiss2.webp")

interface PropTypes{
    translate:`${number}%`,
    idx:number,
    img?:string,
    heading?:string,
    description?:string,
    action?:string
}
const Card = ({idx,translate,img,heading,description,action}:PropTypes) => {
    const immg = img?require(`../../../img/${img}`):undefined
    return (
        <div style={{translate,transition:"translate 700ms ease-in-out"}} className="flex min-w-full flex-col lg:flex-row p-6">
            <div className="lg:w-1/2">
                <img className="w-full max-h-[500px] h-full lg:max-h-full object-cover" src={immg || tmimg} alt="" />
            </div>
            <div className="px-5 lg:w-1/2 flex flex-col lg:justify-between gap-5 text-center lg:text-left h-full">
                <Heading className='text-5xl mb-2 font-normal'>{heading || `LOGO-${idx}`}</Heading>
                <SubHeading className='!text-2xl mb-5'>
                    {description || `It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.`}
                </SubHeading>
                <Button>
                    {action || "See All Case Studies"}
                </Button>
            </div>
        </div>
    )
}

export default Card
