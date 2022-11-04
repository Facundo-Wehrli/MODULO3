import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer"
import HomePage from './pages/HomePage';
import EjemploProps1 from './pages/Ejemplo1';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Ejemplo1" element ={<EjemploProps1/>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />


    </div>


  );

}

export default App;


