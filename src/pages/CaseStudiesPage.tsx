import React from 'react'
import Heading from '../components/heading'
import PortfolioSection from '../components/HomePageComponents/Portfolio/PortfolioSection'
import CaseStudyBlogCard, { HorizontalBlogCard } from '../components/CaseStudyComponents/blogCard'
import Button from '../components/Button'
import Section from '../components/Section'
import MainHeadingSection from '../components/MainHeadingSection'

const CaseStudiesPage = () => {
  return (
    <div> 
      
      <MainHeadingSection title='Explore Our Case Studies' description='it to make a type specimen book. It has survived not only five centuries'/>


      <Section padded style={{ marginInline: "auto" }} className="flex-col p-5 max-w-[1000px] gap-10">
        <Heading className='text-center'>
          Industry Updates
        </Heading>

        <div className="flex flex-wrap gap-11 justify-start">
          <CaseStudyBlogCard description='Having collaborated with this team for over a decade, I can attest to his exceptional r a decade strategic.' size='s' className='mb-0 flex-grow lg:flex-grow-0' />
          <CaseStudyBlogCard description='Having collaborated with this team for over a decade, I can attest to his exceptional r a decade strategic.' size='s' className='mb-0 flex-grow lg:flex-grow-0' />
          <CaseStudyBlogCard description='Having collaborated with this team for over a decade, I can attest to his exceptional r a decade strategic.' size='s' className='mb-0 flex-grow lg:flex-grow-0' />
          <CaseStudyBlogCard description='Having collaborated with this team for over a decade, I can attest to his exceptional r a decade strategic.' size='s' className='mb-0 flex-grow lg:flex-grow-0' />
        </div>
      </Section>
      <PortfolioSection />

      <Section padded style={{ marginInline: "auto" }} className="flex-col p-5 max-w-[1000px] gap-10">
        <Heading className='text-center mb-12'>
          Our Case Studies
        </Heading>

        <div className="flex flex-wrap gap-11 justify-start">
          <CaseStudyBlogCard size='s' className='mb-0 flex-grow ' ContentclassName='!rounded-0 w-full' />
          <CaseStudyBlogCard size='s' className='mb-0 flex-grow ' ContentclassName='!rounded-0 w-full' />
        </div>
      </Section>

      <Section gray padded style={{ marginInline: "auto" }} className="!block p-5 max-w-[1000px] ">
        <Heading className='text-center mb-12'>
          See Our Portfolio
        </Heading>

        <div className="flex flex-wrap gap-5 justify-start">
          <CaseStudyBlogCard size='s' className='mb-0 flex-grow lg:flex-grow- ' ContentclassName='!rounded-0 w-full' />

          <div className=" flex flex-col gap-4">
            <HorizontalBlogCard size='m' ContentclassName='flex flex-col h-full justify-between py-4 ' />
            <HorizontalBlogCard size='m' ContentclassName='flex flex-col h-full justify-between py-4 ' />
            <HorizontalBlogCard size='m' ContentclassName='flex flex-col h-full justify-between py-4 ' />

          </div>
        </div>
      </Section>

      <Section padded style={{ marginInline: "auto" }} className="  max-w-[1000px] flex-col items-center gap-5">
        <Heading className='text-center !mb-0'>
          How Can We Help You?
        </Heading>
        <p className='text-center text-sm text-gray-600'>It was popularised in the 1960s with the release of Letraset sheets containing</p>

        <Button className='bg-black text-white rounded-full font-normal'>
          Contact Us
        </Button>

      </Section>

    </div>
  )
}

export default CaseStudiesPage
