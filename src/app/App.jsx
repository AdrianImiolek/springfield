import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import PricesPage from './pages/PricesPage/PricesPage';
import ContactPage from './pages/ContactPage/ContactPage';
import DemoPage from './pages/DemoPage/DemoPage';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/funkcje" element={<FeaturesPage />} />
          <Route path="/cennik" element={<PricesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </Router>
  );
}

export default App;
