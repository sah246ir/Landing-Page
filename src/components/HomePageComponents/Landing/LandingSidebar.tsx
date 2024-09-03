import { ArrowButton } from '../../Button'
import SubHeading from '../../SubHeading'

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

      <div className="flex gap-5 w-[30em] sm:w-[45em] md:w-[55em] lg:w-[65em]">
        <div style={{aspectRatio:1/1.15}} className="bg-gray-500 min-w-[23%] "></div>
        <div style={{aspectRatio:1/1.15}} className="bg-gray-500 min-w-[23%] "></div>
        <div style={{aspectRatio:1/1.15}} className="bg-gray-500 min-w-[23%] "></div>
      </div>
    </div>
  )
}

export default LandingSidebar
