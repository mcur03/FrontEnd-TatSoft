import React, { useState } from 'react';
import '../src/index.css';
import RegisterProductForm from './pages/RegisterProductForm/RegisterProductForm';
import ProductList from './pages/ProductList/ProductList';

const App = () => {
  // Estado para alternar entre la vista de registro y el catálogo
  const [view, setView] = useState('register'); // 'register' o 'list'

  return (
    <div>
      {/* Barra de navegación simple */}
      <nav className="flex justify-center space-x-4 p-4 bg-purple-600 text-white">
        <button onClick={() => setView('register')} className="px-4 py-2">
          Registrar Producto
        </button>
        <button onClick={() => setView('list')} className="px-4 py-2">
          Catálogo
        </button>
      </nav>
      {/* Mostrar la vista según la selección */}
      {view === 'register' && <RegisterProductForm />}
      {view === 'list' && <ProductList />}
    </div>
  );
};

export default App;
