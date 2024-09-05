import Button from "../../Button"
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
    return (
        <div style={{translate,transition:"translate 700ms ease-in-out"}} className="flex min-w-full flex-col lg:flex-row">
            <div className="lg:w-1/2">
                <img className="w-full min-h-full object-cover" src={tmimg} alt="" />
            </div>
            <div className="p-5 lg:w-1/2 flex flex-col lg:justify-around gap-5 text-center lg:text-left h-full">
                <h1 className='text-3xl mb-2 font-medium'>{heading || `LOGO-${idx}`}</h1>
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
