import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Login from './components/login/login';

import { useState } from 'react';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
  }, []);

  return (
    <div>
      <Navbar setShowLogin={setShowLogin}/>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart/order' element={<Order/>}/>
      </Routes>
    </div>
  )
}

export default App