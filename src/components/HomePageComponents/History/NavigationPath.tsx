import Heading from "../../heading"
import Marker from "../../Marker"
import SubHeading from "../../SubHeading"


interface PropTypes {
  years: number[],
  idx: number,
  setIdx: (idx: number) => void
}
const NavigationPath = ({ years, idx, setIdx }: PropTypes) => {
  return (
    <div style={{marginInline:"auto"}} className='w-[90%] lg:w-[45em] h-96 overflow-hidden'>
      <div style={{ translate: `-${idx > 0 ? idx * 75 : 0}px`, transition: "translate 700ms ease-in-out" }} className="flex mt-7 w-[90%] lg:w-[45em]">
        {years.map((y, i) => {
          return (
            <p onClick={() => setIdx(i)} className={`transition text-xl min-w-[100px] font-normal text-gray-500 hover:text-black cursor-pointer ${i === idx && "!text-black"}`}>
              {y}
            </p>
          )
        })}
      </div>

      <div style={{ translate: `-${idx > 0 ? idx * 75 : 0}px`, transition: "translate 700ms ease-in-out" }} className="mt-8 relative">
        <div className="flex h-[3px] absolute left-0 bottom-0 items-center">
          <div style={{ width: `${idx * 100}px`, transition: "width 700ms ease-in-out" }} className="h-full bg-black  flex items-center">
          </div>
          <div className="relative">
            <Marker />
            <article className="absolute bg-blue-950 text-white px-4 py-4 min-w-44 w-96 max-w-96 mt-1 rounded shadow-xl">
              <div>
                <Heading className="text-white text-lg ">{years[idx]}</Heading>
                <SubHeading className="text-white text-xl font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur blanditiis impedit sunt nulla maxime aliquid quibusdam consequatur nisi saepe natus?
                </SubHeading>
              </div>
            </article>
          </div>
        </div>
        <hr className='h-[3px]' />
      </div>
    </div>
  )
}

export default NavigationPath
