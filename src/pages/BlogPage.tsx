import React from 'react'
import MainHeadingSection from '../components/MainHeadingSection'
import Section from '../components/Section'
import CaseStudyBlogCard, { HorizontalBlogCard } from '../components/CaseStudyComponents/blogCard'
import Pagination from '../components/Pagination'
import SearchSidebar from '../components/BlogPageComponents/SearchSidebatr'

const BlogPage = () => {
  return (
    <div>
      <MainHeadingSection title='Company Blogs' description='it to make a type specimen book. It has survived not only five centuries' />


      <Section padded style={{ marginInline: "auto" }} className="flex-col md:flex-row p-5 max-w-[1000px] gap-10">
        <div className='flex flex-col p-5 gap-10'>
          <div className="flex flex-wrap gap-11 justify-start">
            <CaseStudyBlogCard size='xs' className='mb-0 flex-grow ' />
            <CaseStudyBlogCard size='xs' className='mb-0 flex-grow ' />
            <CaseStudyBlogCard size='xs' className='mb-0 flex-grow ' />
            <CaseStudyBlogCard size='xs' className='mb-0 flex-grow ' />
          </div>
          <hr />
          <HorizontalBlogCard ContentclassName='flex flex-col h-full justify-between py-4 ' />
          <hr />
          <div className="flex flex-wrap gap-11 justify-start">
            <CaseStudyBlogCard size='xs' className='mb-0 flex-grow ' />
            <CaseStudyBlogCard size='xs' className='mb-0 flex-grow ' />
          </div>
          <Pagination />
        </div>

        <SearchSidebar />
      </Section>
    </div>
  )
}

export default BlogPage
