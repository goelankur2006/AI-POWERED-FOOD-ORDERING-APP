import React from 'react'
import Navbar from './components/Navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import {Routes, Route} from 'react-router-dom';
import Add from './pages/add/add';
import List from './pages/list/List';
import Orders from './pages/orders/Orders';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App