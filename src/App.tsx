import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import CopyrightSection from './components/Footer/CopyrightSection';
import CaseStudiesPage from './pages/CaseStudiesPage';
import Navbar from './components/Navbar';
import InvestmentsPage from './pages/InvestmentsPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';

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
      </Routes>
      <Footer />
      <CopyrightSection />
    </div>
  );
}

export default App;
