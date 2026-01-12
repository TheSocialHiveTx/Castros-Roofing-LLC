import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
