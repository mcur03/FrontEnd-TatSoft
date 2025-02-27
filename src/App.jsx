import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../src/index.css';
import Zonas from './pages/GestionZonas/Zonas'
import GestionZonas from './pages/GestionZonas/GestionZonas';
import EditarZona from './pages/GestionZonas/EditarZona'
import RegistrarZona from './pages/GestionZonas/RegistraZona'
import RegisterProductForm from './pages/RegisterProductForm/RegisterProductForm';
import ProductList from './pages/ProductList/ProductList';
import Login from "./pages/LoginPage/Login";
import RecuperarPassword from './pages/LoginPage/RecuperarPassword';
import CodigoVerificacion from './pages/LoginPage/CodigoVerification';
import Restablecer from './pages/LoginPage/Restablecer';

const App = () => {
  // Estado para alternar entre la vista de registro y el catálogo
  const [view, setView] = useState('register'); // 'register' o 'list'

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/recuperar-password" element={<RecuperarPassword />} />
      <Route path="/codigo-verificacion" element={< CodigoVerificacion/>} />
      <Route path="/restablecer" element={<Restablecer/>}/>
      <Route path="/restablecer" element={<Restablecer />} />
      <Route path="/zonas" element={<Zonas />} />
      <Route path="/gestion-zonas" element={<GestionZonas />} />
      <Route path="/registrar-zona" element={<RegistrarZona />} />
      <Route path="/editar-zona" element={<EditarZona />} />
    </Routes>
  </Router>
  );
};

export default App;
