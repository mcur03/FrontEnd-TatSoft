import React, { useState } from "react";
import Tipografia from "../atoms/Tipografia";
import Icono from "../atoms/Iconos";

const BarraZona = ({ opciones = ["Zona 1", "Zona 2", "Zona 3", "Zona 4"] }) => {
  const [seleccionado, setSeleccionado] = useState(0);

  return (
    <Tipografia>
      <div className="flex items-center justify-center py-2">
        <div className="flex flex-wrap items-center p-2 rounded-[20px] bg-white sm:gap-5 lg:gap-4">
          {opciones.map((zona, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center px-2 py-1 rounded-[18px] cursor-pointer 
                ${
                  seleccionado === index
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                } 
                text-sm sm:text-base lg:text-sm`}
              aria-label={`Seleccionar ${zona}`}
              onClick={() => setSeleccionado(index)}
            >
              <span className="text-center">{zona}</span>
              <div>
              <Icono
                name="ubicacion"
                size={20}
                className={
                  seleccionado === index ? "white" : " text -#FFFFFF"
                }
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Tipografia>
  );
};

export default BarraZona;
