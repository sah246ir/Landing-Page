import React from 'react'
import Button from '../Button'
import { Search } from 'lucide-react'

const SearchSidebar = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div className="flex items-center">
                <input type="text" placeholder='search' className='px-2 py-1 border w-full' />
                <Button className='!px-2 bg-black text-white h-full rounded-r-md'>
                    <Search strokeWidth={2} size={21} />
                </Button>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className='partial'>RECENT POSTS</h1>

                <div className='flex flex-col  divide-y divide-gray-300'>
                    <p className='text-sm text-gray-700 py-2.5'>Lorem Ipsum is simply dummy</p>
                    <p className='text-sm text-gray-700 py-2.5'>Lorem Ipsum is simply dummy</p>
                    <p className='text-sm text-gray-700 py-2.5'>Lorem Ipsum is simply dummy</p>
                    <p className='text-sm text-gray-700 py-2.5'>Lorem Ipsum is simply dummy</p>
                    <p className='text-sm text-gray-700 py-2.5'>Lorem Ipsum is simply dummy</p>
                </div>

            </div>

            <div className="flex flex-col gap-5">
                <h1 className='partial'>RECENT COMMENTS</h1>

                <div className='flex flex-col  divide-y divide-gray-300'>
                    <p className='text-sm text-gray-700 py-2.5'>Lorem Ipsum is simply dummy</p>
                    <p className='text-sm text-gray-700 py-2.5'>Lorem Ipsum is simply dummy</p>
                </div>
            </div>

            <div>
                <h1>SUBSCRIBE NOW!</h1> 
                <div className="flex items-center gap-1">
                    <input type="text" placeholder='enter your email' className='px-2 py-1 border' />
                    <Button className='!px-2 bg-gray-800 text-white h-full rounded-md !font-light'>
                        Subscribe
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SearchSidebar
