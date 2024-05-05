import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Modules } from './pages/Modules';
import { Navbar } from './components/Navbar';
import {Home} from './pages/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import {Contact} from './pages/Contact';
import { Discuss } from './pages/Discuss';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/WhatTheFinance' element={<Home />} />
          <Route path='/Modules' element={<Modules />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/ContactUs' element = {<Contact />} />
          <Route path='/Discuss' element = {<Discuss />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;