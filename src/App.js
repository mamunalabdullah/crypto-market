import React from 'react'
import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Header from './components/Header/Header';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
