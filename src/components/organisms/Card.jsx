import React, { useState } from "react";
import Tipografia from "../atoms/Tipografia";
import Botones from "../atoms/Botones";

const Card = ({ razonSocial, nombre, celular }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tipografia>
      <div className="m-1 w-80 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="bg-purple-100 rounded-t-lg p-2 flex justify-between items-center">
          <span></span>
          <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="text-purple-700 hover:text-purple-900">
              <svg className="w-5 h-2" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-1 text-sm text-gray-500">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ver</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Inhabilitar</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="m-2 px-2">
          <div className="flex flex-col pb-3">
            <span className="text-sm text-black font-bold">Nombre:</span>
            <span className="text-sm text-black">{nombre}</span>
            <span className="text-sm text-black font-bold">Celular:</span>
            <span className="text-sm text-black">{celular}</span>
            <span className="text-sm text-black font-bold">Rol:</span>
            <span className="text-sm text-black">Colaborador</span>
          </div>
          <div className="flex justify-end pb-1">
            <Botones label="Editar" tipo="primario" className="bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600" />
          </div>
        </div>
      </div>
    </Tipografia>
  );
};

export default Card;