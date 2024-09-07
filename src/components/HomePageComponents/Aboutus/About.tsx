import { ArrowButton } from '../../Button' 
import Heading from '../../heading'
import Section from '../../Section'
import SubHeading from '../../SubHeading'
const tree = require("../../../img/tree.jpeg")
const About = () => {
    return (
        <Section padded center className='bg-white' >
            <div className="w-[1100px] flex items-center justify-center gap-11 flex-col sm:flex-row text-center sm:text-left">
                <div className="sm:w-[30em]">
                    <h1 className='tracking-wider mb-2'>ABOUT US</h1>
                    <Heading className=' font-semibold mb-4 max-w-[450px]'>
                            Empowering Growth Through Strategic Investments and Innovative Business Consulting
                            </Heading>
                    <SubHeading> 
                    At Classic Group, we specialize in transforming businesses with innovative solutions, combining expertise and integrity to deliver results that stand the test of time. Our commitment is to your success, helping you navigate challenges and seize opportunities in a dynamic world.
                    </SubHeading>
                    <ArrowButton direction='r' size={40} className='transition-transform duration-500 mt-5 tracking-wider text-base hover:translate-x-2'>
                        &nbsp;
                        <span>Learn More</span>
                    </ArrowButton>
                </div>
                <div className="">
                    <img className='object-cover' src={tree} alt="" />
                </div>
            </div>
        </Section>
    )
}

export default About
