import Heading from '../../heading'
import Section from '../../Section'
import Statistics from './Statistics'
const img = require("../../../img/image.png")
const StatisticsSection = () => {
  return (
    <Section padded center className='!bg-blue-900 flex-col '>
      <div className="w-[100%] lg:w-[1100px] flex items-center justify-center flex-col">
        <h1 className='tracking-widest text-sm text-center text-gray-300'>WHO WE ARE</h1>
        <Heading className='font-semibold text-4xl mt-3 text-center text-white'>We are the Best Consulting</Heading>
        <img className='mt-5 mb-3' width={600} src={img} alt="" />
        <Statistics />
      </div>
    </Section >
  )
}

export default StatisticsSection
