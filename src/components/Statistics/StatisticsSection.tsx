import Statistics from './Statistics'
const img = require("../../img/image.png")
const StatisticsSection = () => {
  return (
    <div className='bg-gray-100 p-5 py-12 flex items-center justify-center flex-col '>
      <div className="w-[100%] lg:w-[1100px] flex items-center justify-center flex-col">
        <h1 className='tracking-widest text-gray-800 text-sm text-center'>WHO WE ARE</h1>
        <h2 className='font-semibold text-4xl mt-3 text-gray-800 text-center'>We are the first Best Consulting</h2>
        <img className='mt-5 mb-3' width={600} src={img} alt="" />
        <Statistics />
      </div>
    </div>
  )
}

export default StatisticsSection
