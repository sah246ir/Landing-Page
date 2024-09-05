import { useState } from 'react'
import { ArrowButton } from '../../Button'
import Card from './Card'
import Section from '../../Section'
import Heading from '../../heading'

interface Service{
    img: string,
    heading: string,
    description: string,
    action?: string
}
interface PropTypes{
    heading?:string,
    subheading?:string
    cardcontent?:Service[]
}

const PortfolioSection = ({heading,subheading,cardcontent}:PropTypes) => {
    const len = ["","",""]
    const [idx,setIdx] = useState<number>(0)

    const gonext = ()=>{
        setIdx(prev=>{
            if(prev===len.length-1){
                return 0
            }
            return prev+1
        })
    }
    const goprev = ()=>{
        setIdx(prev=>{
            if(prev===0){
                return len.length-1
            }
            return prev-1
        })
    }
    return (
        <Section gray padded center className='px-0 flex-col overflow-hidden'>
            <div className="w-[100%] lg:w-[1100px] flex justify-center">
                <div className=" w-full p-5 px-11 flex sm:items-end justify-between mb-7 flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                    <div>
                        <h1 className='tracking-wider mb-2'>{subheading || "OUR PORTFOLIO"}</h1>
                        <Heading className='text-5xl font-semibold'>
                            {heading || "Our Case Studies"}
                        </Heading>
                    </div>
                    <div className='flex gap-1'>
                        <ArrowButton onClick={goprev} size={55} direction='l' />
                        <ArrowButton onClick={gonext} size={55} direction='r' />
                    </div>
                </div>
            </div>

            <div className="flex w-full">
                {cardcontent? 
                cardcontent.map((card,i)=>{
                    return (
                        <Card idx={i+1} translate={`${-100*idx}%`} heading={card.heading} description={card.description} action={card.action} />  
                    )
                })
                :

                len.map((_,i)=>{
                    return(
                        <Card idx={i+1} translate={`${-100*idx}%`} /> 
                    )
                })  
                }
            </div>
            
        </Section>
    )
}

export default PortfolioSection
