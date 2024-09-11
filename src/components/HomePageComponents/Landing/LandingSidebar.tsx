import { ArrowButton } from '../../Button'
import SubHeading from '../../SubHeading'

const img1 = require("../../../img/sustainable.jpg")
const img2 = require("../../../img/project.jpg")
const img3 = require("../../../img/construction.jpg") 
const LandingSidebar = ({open}:{open:boolean}) => {
  return (
    <div style={{transitionDelay:"1300ms"}} className={`duration-700 ease-out h-full flex flex-col justify-around items-center bg-black bg-opacity-55 w-[30%] py-8 px-12 max-w-[422px] relative
      ${open?"translate-x-0":"translate-x-[240%]"}
    `}> 
      <div className=" ">
         
      </div>

      <div className="z-10">
        <SubHeading className='text-white'>It was popularised in the
          1960s with the release of
          Letraset sheets.
        </SubHeading>
        <ArrowButton  direction='r' size={40} className='transition-transform duration-500 mt-5 tracking-wider text-md hover:translate-x-2 text-white [&>*]:!stroke-white' >
          &nbsp;
          <span>Case Study</span>
        </ArrowButton>
      </div>

      <div className="flex gap-5 w-[130em] max-w-[30em] sm:max-w-[45em] md:max-w-[55em] relative">
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
