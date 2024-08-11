import { useState } from 'react'
import { ArrowButton } from '../Button'
import Card from './Card'
const PortfolioSection = () => {
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
        <div className='py-12 flex justify-center items-center flex-col overflow-hidden'>
            <div className="w-[100%] lg:w-[1100px] flex justify-center">
                <div className=" w-full p-5 flex sm:items-end justify-between mb-7 flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                    <div>
                        <h1 className='tracking-wider mb-2'>OUR PORTFOLIO</h1>
                        <h2 className='text-5xl font-semibold'>
                            Our Case Studies
                        </h2>
                    </div>
                    <div className='flex gap-1'>
                        <ArrowButton onClick={goprev} size={55} direction='l' />
                        <ArrowButton onClick={gonext} size={55} direction='r' />
                    </div>
                </div>
            </div>

            <div className="flex">
                {len.map((_,i)=>{
                    return(
                        <Card idx={i+1} translate={`${-100*idx}%`} /> 
                    )
                })} 
            </div>
            
        </div>
    )
}

export default PortfolioSection
