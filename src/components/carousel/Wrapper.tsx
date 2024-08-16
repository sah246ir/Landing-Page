import React from 'react'


const Wrapper = ({children}:{children:any}) => {
  return (
    <div className='flex min-w-full overflow-hidden'>
      {children}
    </div>
  )
}

export default Wrapper
