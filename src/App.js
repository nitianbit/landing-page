import React, { useState, useContext } from 'react';

import MainPage from './pages/MainPage';
import Login from './pages/Login';
import { AppContext } from './services/context/AppContext';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
