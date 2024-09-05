import { ArrowButton } from '../../Button'
import SubHeading from '../../SubHeading'

const img1 = require("../../../img/sustainable.jpg")
const img2 = require("../../../img/project.jpg")
const img3 = require("../../../img/construction.jpg")
const LandingSidebar = () => {
  return (
    <div className='h-full flex flex-col justify-around items-center bg-gray-400 w-[30%] py-8 px-12 max-w-[422px]'>

      <div className="flex items-center gap-3">
         
      </div>

      <div className="">
        <SubHeading>It was popularised in the
          1960s with the release of
          Letraset sheets.
        </SubHeading>
        <ArrowButton direction='r' size={40} className='transition-transform duration-500 mt-5 tracking-wider text-md hover:translate-x-2'>
          &nbsp;
          <span>Case Study</span>
        </ArrowButton>
      </div>

      <div className="flex gap-5 w-[130em] max-w-[30em] sm:max-w-[45em] md:max-w-[55em] lg:max-w-[65em] relative">
        <div style={{aspectRatio:1/1.15}} className="bg-gray-500 w-[23%] "> 
            <img className='h-full w-full object-cover' src={img1} alt="" />
        </div>
        <div style={{aspectRatio:1/1.15}} className="bg-gray-500 w-[23%] ">
            <img className='h-full w-full object-cover' src={img2} alt="" />
            </div>
        <div style={{aspectRatio:1/1.15}} className="bg-gray-500 w-[23%] ">
            <img className='h-full w-full object-cover' src={img3} alt="" />
            </div>
      </div>
    </div>
  )
}

export default LandingSidebar
