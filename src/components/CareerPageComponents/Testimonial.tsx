import React, { useEffect } from 'react'
import TestimonialCard from '../card/TestimonialCard'
import Heading from '../heading'
import { ArrowButton } from '../Button'
import useCarousel from '../../hooks/useCarousel'

 
const Testimonial = () => {
    const totalcards = [
        {
            name:"RACHAEL SCHMUF",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo dignissimos ad reiciendis, velit placeat."
        },
        {
            name:"EMMA STONE",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo dignissimos ad reiciendis, velit placeat."
        },
        {
            name:"TOM HANKS",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo dignissimos ad reiciendis, velit placeat."
        },
        {
            name:"ROBIN WILLIAMS",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo dignissimos ad reiciendis, velit placeat."
        },
        {
            name:"TOM CRUISE",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo dignissimos ad reiciendis, velit placeat."
        },
        {
            name:"RYAN GOSLING",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo dignissimos ad reiciendis, velit placeat."
        },
        {
            name:"BRUCE WILLS",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo dignissimos ad reiciendis, velit placeat."
        }
    ]
    const { gonext, goprev, index } = useCarousel({
        cards: totalcards.length,

    })

    useEffect(() => {
        console.log(index)
    }, [index])

    return (
        <div className="flex w-full overflow-  mt-5 overflow-hidden max-w-[58em]">

            <div style={{ marginInline: "auto" }} className="relative min-h-[22em]">

                <div style={{ left: "27em" }} className="absolute z-50 text-left">
                    <Heading>#{index + 1}</Heading>
                    <Heading className='text-xl tracking-wide'>{totalcards[index].name}</Heading>
                    <p className='text-sm text-gray-700 max-w-[25em]'>
                        {totalcards[index].description}
                    </p>
                </div>

                <div style={{ translate: `${-((index - 1) * 11) - 0.2}em` }} className='transition-all duration-500 relative flex gap-4 justify-start items-end min-h-[22em]'>

                    <div style={{ left: `${((index - 1) * 11) + 1.45}em` }} className='transition-all duration-500 flex gap-1 mb-2 fixed bottom-[12.5em] '>
                        <ArrowButton size={55} direction='l' onClick={goprev} />
                        <ArrowButton size={55} direction='r' onClick={gonext} />
                    </div>
                    {
                        totalcards.map((card, i) => {
                            return (
                                <TestimonialCard size={index === i ? "lg" : "sm"} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Testimonial
