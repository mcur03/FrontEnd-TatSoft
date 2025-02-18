import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../src/index.css';
import RegisterProductForm from './pages/RegisterProductForm/RegisterProductForm';
import ProductList from './pages/ProductList/ProductList';
import Login from "./pages/LoginPage/Login";
import RecuperarPassword from './pages/LoginPage/RecuperarPassword';
import CodigoVerificacion from './pages/LoginPage/CodigoVerification';

const App = () => {
  // Estado para alternar entre la vista de registro y el catálogo
  const [view, setView] = useState('register'); // 'register' o 'list'

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/recuperar-password" element={<RecuperarPassword />} />
      <Route path="/codigo-verificacion" element={< CodigoVerificacion/>} />
    </Routes>
  </Router>
  );
};

export default App;
