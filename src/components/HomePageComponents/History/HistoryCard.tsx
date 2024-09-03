import { ArrowButton } from '../../Button'
import Heading from '../../heading'
import SubHeading from '../../SubHeading'
const img = require("../../../img/swiss2.webp")

interface PropTypes {
    translate: `${number}%`,
    year: number
}
const HistoryCard = ({ year, translate }: PropTypes) => {
    return (
            <div style={{ translate, transition: "translate 700ms ease-in-out" }} className="flex items-center min-w-[100%] w-[100%] gap-10 p-4 flex-col">
                <div className="">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="">
                    <Heading className='text-xl font-semibold mb-2'>Journey title</Heading>
                    <SubHeading className='!text-lg '>It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages.It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages.</SubHeading>
                    <ArrowButton direction='r' size={40} className='transition-transform duration-500 mt-5 tracking-wider text-md hover:translate-x-2'>
                        &nbsp;
                        <span>Learn More</span>
                    </ArrowButton>
                </div>
            </div>
    )
}

export default HistoryCard
