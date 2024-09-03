import Button from "../../Button"
import SubHeading from "../../SubHeading"

const img = require("../../../img/swiss2.webp")

interface PropTypes{
    translate:`${number}%`,
    idx:number
}
const Card = ({idx,translate}:PropTypes) => {
    return (
        <div style={{translate,transition:"translate 700ms ease-in-out"}} className="flex items-center min-w-full flex-col sm:flex-row">
            <div>
                <img style={{maxHeight:"600px"}} className="w-full" src={img} alt="" />
            </div>
            <div className="p-5">
                <h1 className='text-3xl mb-2 font-medium'>LOGO-{idx}</h1>
                <SubHeading className='text-sm mb-5'>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                </SubHeading>
                <Button>
                    See All Case Studies
                </Button>
            </div>
        </div>
    )
}

export default Card
