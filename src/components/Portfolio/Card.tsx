import Button from '../Button'
const img = require("../../img/swiss2.webp")

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
                <p className='text-sm   text-gray-800 mb-5'>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                </p>
                <Button>
                    See All Case Studies
                </Button>
            </div>
        </div>
    )
}

export default Card
