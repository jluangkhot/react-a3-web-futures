import React from 'react';


import Header from './components/Header';
import Carousel from './components/Carousel';
import Home from './components/Home';
import Shop from './components/Shop';
import './styles/styles.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">

        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
  );
}

export default App;
