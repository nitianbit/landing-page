import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom

import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import AdminLayout from './components/Admin/AdminLayout.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AdminLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
