import React, { useEffect, useState } from 'react';
import LandingSidebar from './LandingSidebar';
import { ArrowButton } from '../../Button';
import Heading from '../../heading';
import SubHeading from '../../SubHeading';
const img = require("../../../img/homebanner.jpg")

const LandingSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Trigger the slide-in effect when the component mounts
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 1500); // Small delay to ensure smooth transition
    }, []);

    return (
        <section className="bg-gray-100 overflow-hidden h-screen">
            <div className="absolute h-full w-full left-0 top-0">
                <div className="absolute w-full h-full bg-black opacity-70"></div>
                <img className='h-full w-full object-cover' src={img} alt="" />
            </div>
            <div className="flex justify-between items-center relative h-full">
                <div className="w-[1100px] sm:px-12 z-40">
                    <div
                        className={`p-5 relative flex-grow transform transition-transform duration-700 ease-out ${
                            isVisible ? 'translate-x-0' : '-translate-x-[105%]'
                        }`}
                    >
                        <Heading className="text-3xl lg:text-5xl font-medium mb-4  text-white">
                            Empowering Growth Through Strategic Investments and Innovative Business Consulting
                        </Heading>
                        <SubHeading className="max-w-[450px] border-gray-800 border-0 border-l-[1.5px]  text-white">
                            At Classic Group, we drive growth and innovation across industries, partnering with businesses to achieve lasting success through integrity and collaboration.
                        </SubHeading>
                        <ArrowButton
                            direction="r"
                            size={40}
                            className="transition-transform duration-500 mt-5 tracking-wider text-md hover:translate-x-2 text-white [&>*]:!stroke-slate-50"
                        >
                            &nbsp;
                            <span>Learn More</span>
                        </ArrowButton>
                    </div>
                </div>
                <LandingSidebar open={isVisible} />
            </div>
        </section>
    );
};

export default LandingSection;
