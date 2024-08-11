import { ArrowButton } from '../Button' 
const img = require("../../img/swiss.jpg")
const About = () => {
    return (
        <div className='flex p-5 py-12 justify-center items-center'>
            <div className="w-[1100px] flex items-center justify-between gap-5 flex-col sm:flex-row text-center sm:text-left">
                <div className="">
                    <h1 className='tracking-wider mb-2'>ABOUT US</h1>
                    <h2 className='text-5xl font-semibold mb-4'>
                        Our Delivery<br />
                        Speaks For Itself
                    </h2>
                    <p className='text-sm text-gray-700'>It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages.It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages.
                    </p>
                    <ArrowButton direction='r' size={30} className='transition-transform duration-500 mt-5 tracking-wider text-sm hover:translate-x-2'>
                        &nbsp;
                        <span>Learn More</span>
                    </ArrowButton>
                </div>
                <div className="">
                    <img width={650} src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
