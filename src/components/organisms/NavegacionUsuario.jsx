import React from "react";
import Iconos from "../atoms/Iconos";
import Tipografia from "../atoms/Tipografia";

const NavegacionUsuario = () => {
  return (
    <div className="fixed left-0 top-0 z-0 w-70 h-full bg-white border-r border-gray-200 dark:border-gray-100">
      <Tipografia>
        <div className="flex flex-col items-start h-full py-10 space-y-5 font-medium">
          {[
            { name: "notificaciones", label: "Notificaciones" },
            { name: "preventa", label: "Preventa" },
            { name: "catalogo", label: "Catálogo" },
            { name: "gest-acumulados", label: "Ventas y Devoluciones" },
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
        <div className="py-[273px]">
        <button className="flex items-center justify-between w-full px-5 py-4 mt-auto bg-purple-900 hover:bg-purple-500 text-white">
          <div className="flex items-center space-x-5">
            <Iconos name="cerrar-sesion" className="text-white" />
            <span className="text-sm">Cerrar sesión</span>
          </div>
        </button>
        </div>
      </Tipografia>
    </div>
  );
};

export default NavegacionUsuario;
