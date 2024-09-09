import React from 'react'
import LandingSection from '../components/HomePageComponents/Landing/LandingSection'
import About from '../components/HomePageComponents/Aboutus/About'
import ServiceSection from '../components/HomePageComponents/Services/ServicesSection'
import HistorySection from '../components/HomePageComponents/History/HistorySection'
import StatisticsSection from '../components/HomePageComponents/Statistics/StatisticsSection'

const HomePage = () => {
  return (
    <div>
       <LandingSection />
      <About />
      {/* <PortfolioSection /> */}
      <ServiceSection />
      <StatisticsSection />
      <HistorySection />
      {/* <BlogSection /> */}
      {/* <ContactSection /> */}
     
    </div>
  )
}

export default HomePage
