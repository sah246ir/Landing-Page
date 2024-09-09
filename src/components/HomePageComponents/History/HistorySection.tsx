import { useEffect, useState } from 'react'
import { ArrowButton } from '../../Button'
import HistoryCard from './HistoryCard'
import NavigationPath from './NavigationPath'
import Section from '../../Section'
import Heading from '../../heading'

const HistorySection = () => {
  const [years, setYears] = useState<number[]>([])
  const [idx, setIdx] = useState<number>(0)
  const gonext = () => {
    setIdx(prev => {
      if (prev === years.length - 1) {
        return 0
      }
      return prev + 1
    })
  }
  const goprev = () => {
    setIdx(prev => {
      if (prev === 0) {
        return years.length - 1
      }
      return prev - 1
    })
  }
  const setter = (idx:number) => {
    setIdx(idx)
  }
  useEffect(() => {
    const years = [];
    for (let year = 2004; year <= 2025; year++) {
      years.push(year);
    }
    setYears([...years])
  }, [])
  return (
    <Section padded center className=' flex-col '>


      <div className="w-[100%] lg:w-[1000px] flex flex-col overflow-hidden">
        <div className="">
          <h1 className='tracking-widest text-gray-800 text-sm text-center'>OUR HISTORY</h1>
          <Heading className='font-medium text-4xl mt-3 text-center'>Our Great Journey</Heading>
        
          <NavigationPath setIdx={setter} years={years} idx={idx} />
          <div style={{marginInline:"auto"}} className="mt-3 flex justify-between w-[90%] lg:w-[45em]">
            {idx>0?<ArrowButton onClick={goprev} size={35} direction='l' />:<div />}
            {idx<years.length-1?<ArrowButton onClick={gonext} size={35} direction='r' />:<div />}
          </div>
        </div>
        <div className="flex">
          {years.map(yr => {
            return (
              <HistoryCard translate={`${-100 * idx}%`} year={yr} />
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default HistorySection
