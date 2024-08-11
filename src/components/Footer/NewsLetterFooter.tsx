import Button from '../Button'

const NewsLetterFooter = () => {
    return (
        <div className='flex flex-col text-center md:flex-row md:text-left justify-between gap-5'> 
            <div className="">
                <h1 className='font-semibold text-4xl'>Subscribe Our News Letter</h1>
                <p className='text-xs mt-1 text-gray-500'>Lorem Ipsum has been the industry's text ever.</p>
            </div> 
            <div className="flex bg-white max-h-11 rounded-l-full rounded-r-full items-center">
                <div className="w-full md:w-fit  p-4 "> 
                    <input type="text" className='w-full px-3 py-1 bg-transparent text-sm' placeholder='Enter Your Email'/>
                </div>
                <Button className='w-full md:w-fit  py-1 rounded-l-full rounded-r-full bg-black text-white font-light h-full'>
                    Subscribe Now
                </Button>
            </div> 
        </div>
    )
}

export default NewsLetterFooter
