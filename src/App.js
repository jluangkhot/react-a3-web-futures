import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import './styles/styles.css';


function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Shop" element={<Shop />} />
        </Routes>
      </div>
  );
}

export default App;
