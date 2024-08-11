

interface PropTypes {
  years: number[],
  idx: number,
  setIdx: (idx: number) => void
}
const NavigationPath = ({ years, idx, setIdx }: PropTypes) => {
  return (
    <div style={{marginInline:"auto"}} className='w-[90%] lg:w-[45em] overflow-hidden h-28 '>
      <div style={{ translate: `-${idx > 0 ? idx * 75 : 0}px`, transition: "translate 700ms ease-in-out" }} className="flex mt-7 ">
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
          <div className="border border-black size-4 rounded-full grid place-items-center bg-white">
            <div className="size-2 rounded-full bg-black"></div>
          </div>
        </div>
        <hr className='h-[3px]' />
      </div>
    </div>
  )
}

export default NavigationPath
