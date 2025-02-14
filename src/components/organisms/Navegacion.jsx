import React from "react";
import Iconos from "../atoms/Iconos";
import Tipografia from "../atoms/Tipografia";

const NavegacionAdministrador = () => {
  return (
    <div className="fixed left-0 top-0 z-0 w-70 h-full bg-white border-r border-gray-200 dark:border-gray-100">
      <Tipografia>
        <div className="flex flex-col items-start h-full py-10 space-y-5 font-medium">
          {[
            { name: "gest-usuarios", label: "Gestión de Usuarios" },
            { name: "gest-clientes", label: "Gestión de Clientes" },
            { name: "gest-produtos", label: "Gestión de Productos" },
            { name: "inventario", label: "Gestión de Inventario" },
            { name: "gest-zonas", label: "Gestión de Zonas" },
            { name: "gest-acumulados", label: "Acumulados" },
            { name: "preventa", label: "Gestión de Preventa" },
            { name: "catalogo", label: "Gestión de Catálogo" },
          ].map((item) => (
            <button
              key={item.name}
              type="button"
              className="flex items-center justify-between w-full px-4 py-2 group"
            >
              <div className="flex items-center space-x-4">
                <Iconos name={item.name} />
                <span className="text-sm text-gray-700 group-hover:text-purple-600 dark:text-gray-500">
                  {item.label}
                </span>
              </div>
              <Iconos name="despliegue" className="ml-3" /> 
            </button>
          ))}
        </div>
      </Tipografia>
    </div>
  );
};

export default NavegacionAdministrador;
