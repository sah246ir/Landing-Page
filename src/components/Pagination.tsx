import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

interface PropTypes{
    active?:boolean,
    page:number
}
const Page = ({active,page}:PropTypes)=>{
    return(
        <button className={`transition duration-150 ${active?"bg-gray-300":""} px-1.5 rounded hover:bg-gray-200`}>
            {page}
        </button>
    )
}
const Pagination = () => {
  return (
    <div className='flex w-full justify-between'>
      <button className="flex gap-1 text-xs items-center">
          <ArrowLeft size={20} />
          <p>Previous Page</p>
      </button>

      <div className="flex gap-2">
          <Page page={1} />
          <Page page={2} />
          <Page active page={3} />
          <Page page={4} />
          <Page page={5} />
          <Page page={6} />
      </div>

      <button className="flex gap-1 text-xs items-center">
          <p>Next Page</p>
          <ArrowRight size={20} />
      </button>
    </div>
  )
}

export default Pagination
