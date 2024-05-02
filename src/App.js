import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Modules } from './pages/Modules';
import { Navbar } from './components/Navbar';
import {Home} from './pages/Home';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Modules' element={<Modules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;