import LandingSidebar from './LandingSidebar'
import { ArrowButton } from '../Button'

const LandingSection = () => {
    return (
        <div className='bg-gray-200 min-h-screen overflow-hidden'> {/* Changed to h-screen */}
            
            <div className="flex justify-between items-center h-screen">
                <div className="w-[1100px]">
                    <div className="logo absolute top-0 p-5">
                        <h1 className='text-4xl mb-2 font-normal'>LOGO</h1>
                    </div>
                    <div className='p-5 relative flex-grow'>
                        <h1 className='text-5xl font-semibold mb-8'>
                            Our Delivery<br />
                            Speaks For Itself
                        </h1>
                        <p className='text-sm p-0 border border-gray-800 border-0 border-l-[1.5px] px-3 text-gray-800'>
                            It was popularised in the 1960s with the release of Letraset<br />
                            sheets containing Lorem Ipsum passages.
                        </p>
                        <ArrowButton direction='r' size={40} className='transition-transform duration-500 mt-5 tracking-wider text-md hover:translate-x-2'>
                            &nbsp;
                            <span>Learn More</span>
                        </ArrowButton>
                    </div>
                </div>
                <LandingSidebar />
            </div>

        </div>
    )
}

export default LandingSection
