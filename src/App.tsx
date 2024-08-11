import React from 'react'; 
import './App.css';
import Footer from './components/Footer/Footer';
import Button, { ArrowButton } from './components/Button';
import ContactSection from './components/Contact/ContactSection';
import StatisticsSection from './components/Statistics/StatisticsSection';
import About from './components/Aboutus/About';
import LandingSection from './components/Landing/LandingSection';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import ServiceSection from './components/Services/ServicesSection';
import HistorySection from './components/History/HistorySection';
import CopyrightSection from './components/Footer/CopyrightSection';
import BlogSection from './components/Blog/BlogSection';

function App() {
  return (
    <div className="App">
      <LandingSection />
      <About />
      <PortfolioSection />
      <ServiceSection />
      <StatisticsSection />
      <HistorySection />
      <BlogSection />
      <ContactSection />
      <Footer /> 
      <CopyrightSection />
      </div>
  );
}

export default App;
