import LandingSidebar from './LandingSidebar'
import { ArrowButton } from '../../Button'
import Heading from '../../heading'
import SubHeading from '../../SubHeading'

const LandingSection = () => {
    return (
        <section className='  bg-gray-100 overflow-hidden'> {/* Changed to h-screen */}
            
            <div className="flex justify-between items-center h-screen">
                <div className="w-[1100px] sm:px-12">
                    <div className="logo absolute top-0 p-5">
                        {/* <h1 className='text-4xl mb-2 font-normal'>LOGO</h1> */}
                    </div>
                    <div className='p-5 relative flex-grow'>
                    <Heading className='text-3xl font-semibold mb-4 max-w-[450px]'>
                            Empowering Growth Through Strategic Investments and Innovative Business Consulting
                            </Heading>
                        <SubHeading className='max-w-[450px]  border-gray-800 border-0 border-l-[1.5px] px-3'>
                            At Classic Group, we drive growth and innovation across industries, partnering with businesses to achieve lasting success through integrity and collaboration.
                        </SubHeading>
                        <ArrowButton direction='r' size={40} className='transition-transform duration-500 mt-5 tracking-wider text-md hover:translate-x-2'>
                            &nbsp;
                            <span>Learn More</span>
                        </ArrowButton>
                    </div>
                </div>
                <LandingSidebar />
            </div>

        </section>
    )
}

export default LandingSection
