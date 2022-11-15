import './styles/normalize.css';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Homepage from "./pages/Homepage"
import NosotrosPage from "./pages/NosotrosPage"
import ServiciosPage from "./pages/ServiciosPage"
import GaleriaPage from "./pages/GaleriaPage"
import ContactoPage from "./pages/ContactoPage"

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
         
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/nosotros" element={<NosotrosPage />}></Route>
          <Route path="/servicios" element={<ServiciosPage />}></Route>
          <Route path="/galeria" element={<GaleriaPage />}></Route>
          <Route path="/contacto" element={<ContactoPage />}></Route>
        </Routes>
      </BrowserRouter>



      <Footer />
    </div >
  );
}

export default App;