import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import CopyrightSection from './components/Footer/CopyrightSection';
import CaseStudiesPage from './pages/CaseStudiesPage';
import Navbar from './components/Navbar';
import InvestmentsPage from './pages/InvestmentsPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/case-study' element={<CaseStudiesPage />} />
        <Route path='/investments' element={<InvestmentsPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
      <Footer />
      <CopyrightSection />
    </div>
  );
}

export default App;
