import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import CopyrightSection from './components/Footer/CopyrightSection';
import CaseStudiesPage from './pages/CaseStudiesPage';
import Navbar from './components/Navbar';
import InvestmentsPage from './pages/InvestmentsPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/case-study' element={<CaseStudiesPage />} />
        <Route path='/investments' element={<InvestmentsPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
        <Route path='/careers' element={<CareersPage />} />
      </Routes>
      <Footer />
      <CopyrightSection />
    </div>
  );
}

export default App;
