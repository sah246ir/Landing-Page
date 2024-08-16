import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import CopyrightSection from './components/Footer/CopyrightSection';
import CaseStudiesPage from './pages/CaseStudiesPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/case-study' element={<CaseStudiesPage />} />
      </Routes>
      <Footer />
      <CopyrightSection />
    </div>
  );
}

export default App;
