import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom

import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import ProductPage from './components/Products/ProductPage/ProductPage.jsx';
import AllProductPage from './components/Products/AllProductPage.jsx';
import AboutUs from './components/AboutUs/AboutUsPage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/products" element={<AllProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
