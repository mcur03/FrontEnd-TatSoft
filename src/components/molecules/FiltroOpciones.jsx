import React, { useState } from "react";
import Tipografia from "../atoms/Tipografia";

const FiltroOpciones = ({ 
  opciones = ["Todos", "Por fecha", "Por zona"], 
  className,
  onChange 
}) => {
  const [seleccionado, setSeleccionado] = useState(opciones[0]);

  const handleSeleccion = (opcion) => {
    setSeleccionado(opcion);
    if (onChange) {
      onChange(opcion);
    }
  };

  return (
    <Tipografia>
      <span className="mb-2 text-base text-gray-600 font-semibold block text-center sm:text-left">
        Filtro
      </span>
      <div
        className={`flex flex-wrap justify-center sm:justify-start gap-2 rounded-full p-2 shadow-md ${className}`}
      >
        {opciones.map((opcion) => (
          <button
            key={opcion}
            onClick={() => handleSeleccion(opcion)}
            className={`px-3 sm:px-4 md:px-6 py-1 md:py-2 text-sm md:text-base rounded-full transition-all duration-300 font-medium ${
              seleccionado === opcion ? "bg-purple-500 text-white" : "text-gray-500 hover:bg-gray-200"
            }`}
          >
            {opcion}
          </button>
        ))}
      </div>
    </Tipografia>
  );
};

export default FiltroOpciones;