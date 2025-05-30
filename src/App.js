import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import DigitalMarketing from './pages/DigitalMarketing';
import Carrer from './pages/Carrer';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/career" element={<Carrer />} />
        <Route path="/contact-us" element={<Contact /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
