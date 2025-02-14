import React, { useState } from "react";
import Tipografia from "../atoms/Tipografia";

const FiltroOpciones = ({ opciones = ["Todos", "Por fecha", "Por zona"] }) => {
  const [seleccionado, setSeleccionado] = useState(opciones[0]);

  return (
    <Tipografia>
      <span className="m-3 text-base text-black-500 mb-1">Filtro</span> 
      <div className="flex justify-center bg-gray-100 rounded-full p-2 w-max shadow-md">
        {opciones.map((opcion) => (
          <button
            key={opcion}
            onClick={() => setSeleccionado(opcion)}
            className={`px-6 py-1 text-base rounded-full transition-all duration-300 ${
              seleccionado === opcion ? "bg-purple-600 text-white" : "text-gray-500"
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
