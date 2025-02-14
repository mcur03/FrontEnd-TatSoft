import React, { useState } from "react";
import Tipografia from "../atoms/Tipografia";
import Buscador from "./Buscador";
import Icono from "../atoms/Iconos";


const FiltroBusqueda = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([
    "Galletas",
    "Integrales",
    "Avena",
  ]);
  const allFilters = [
    "Galletas",
    "Integrales",
    "Avena",
    "Lácteos",
    "Sin azúcar",
    "Gaseosa",
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <Tipografia>
      <div className="relative w-96">
        <div className="flex gap-4 flex-wrap items-center mb-1 border border-gray-200 rounded-lg p-1">
          {selectedFilters.slice(0, 4).map((filter, index) => (
            <span
              key={index}
              className="px-4 py-1 bg-purple-400 text-white rounded-lg text-sm"
            >
              {filter}
            </span>
          ))}
          {selectedFilters.length > 3 && (
            <span className="px-py-1 bg-gray-300 rounded-full text-sm">
              ...
            </span>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 py-1 bg-purple-400 text-white rounded-full text-sm flex items-center"
          >
            {selectedFilters.length}
            <Icono name="despliegue" color="white" size={15} className="m-0.5" />
          </button>
        </div>

        {isOpen && (
          <div className="absolute w-full bg-white shadow-md rounded-lg p-3 z-10">
            <Buscador />
            <div className="m-4 grid grid-cols-2 gap-3">
              {allFilters.map((filter, index) => (
                <div key={index} className="flex items-center gap-2">
                  <button
                    onClick={() => toggleFilter(filter)}
                    className={`m-1 w-7 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedFilters.includes(filter)
                        ? "bg-purple-400"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedFilters.includes(filter) && (
                      <span className="text-white">✔</span>
                    )}
                  </button>
                  <span className="text-gray-700">{filter}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Tipografia>
  );
};

export default FiltroBusqueda;
