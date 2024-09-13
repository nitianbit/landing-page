import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom

import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import ProductPage from './components/Products/ProductPage/ProductPage.jsx';
import AllProductPage from './components/Products/AllProductPage.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import NavbarComponent from './components/Navbar.jsx';
import Contact from './components/ContactUs/Contact.jsx';
import Client from './components/Clients/Clients.jsx';
import Footer from './components/Footer/index.jsx';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavbarComponent />
      <div className='px-4 py-8 md:px-12 lg:px-15'>
      <Routes >
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
