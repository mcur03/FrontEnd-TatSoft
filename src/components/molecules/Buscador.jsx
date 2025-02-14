import React, { useState } from 'react';
import Icono from '../atoms/Iconos';
import Tipografia from "../atoms/Tipografia";

const Buscador = ({ placeholder = "Buscar productos, marcas y más...", iconName = "buscar" }) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Tipografia>
      <form className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="block w-full p-2 pr-8 text-sm text-gray-600 border border-gray-200 rounded-full bg-white outline-none placeholder:font-bold placeholder:text-gray-400"
            placeholder={placeholder}
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Icono name={iconName} className="w-5 h-4 text-gray-600" />
          </div>
        </div>
      </form>
    </Tipografia>
  );
};

export default Buscador;
