import { useState } from 'react'
import { ArrowButton } from '../../Button' 
import BlogCard from './blogCard'
import Section from '../../Section'
import Heading from '../../heading'
const BlogSection = () => {
    const len = ["", "", ""]
    const [idx, setIdx] = useState<number>(0)

    const gonext = () => {
        setIdx(prev => {
            if (prev === len.length - 1) {
                return 0
            }
            return prev + 1
        })
    }
    const goprev = () => {
        setIdx(prev => {
            if (prev === 0) {
                return len.length - 1
            }
            return prev - 1
        })
    }
    return (
        <Section padded className='bg-gray-50 mb-10 flex justify-center'>
            <div className="w-[1100px] justify-center overflow-hidden">
                <div className="p-5 flex sm:items-end justify-between flex-col sm:flex-row items-center text-center sm:text-left gap-5">
                    <div>
                        <h1 className='tracking-wider mb-2'>OUR BLOGS</h1>
                        <Heading className='text-5xl font-semibold'>
                            Our Latest Blog
                        </Heading>
                    </div>
                    <div className='flex gap-1'>
                        <ArrowButton onClick={goprev} size={55} direction='l' />
                        <ArrowButton onClick={gonext} size={55} direction='r' />
                    </div>
                </div>
                <div className="flex w-full">
                    {len.map(_ => {
                        return (
                            <div style={{ translate: `${-100 * idx}%`, transition: "translate 700ms ease-in-out" }} className="flex justify-center items-end min-w-full gap-7 p-5"> 
                               <BlogCard size='l' />
                               <BlogCard size='s' />
                               <BlogCard size='m' />
                            </div>
                        )
                    })}
                </div>
            </div>

        </Section>
    )
}

export default BlogSection
