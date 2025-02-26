import React, { useState } from "react";
import Iconos from "../atoms/Iconos";
import Tipografia from "../atoms/Tipografia";
import Botones from "../atoms/Botones";

const NavegacionUsuario = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleLogout = () => {
    // Redirigir al login usando window.location
    window.location.href = "/";
  };

  const menuItems = [
    {
      name: "gest-clientes",
      label: "Gestión de Clientes",
      subItems: ["Lista de Clientes","Solicitud de creación "],
    },
    {
      name: "gest-acumulados",
      label: "Acumulados",
      subItems: ["Reporte Acumulado"],
    },
    {
      name: "preventa",
      label: "Gestión de Preventa",
      subItems: ["Nueva Preventa", "Historial de Preventas"],
    },
    {
      name: "catalogo",
      label: "Gestión de Catálogo",
      subItems: ["Ver Catálogo"],
    },
  ];

  return (
    <div className="w-2/1 bg-white border-r shadow-md border-gray-100 flex flex-col justify-between">
      <Tipografia>
        <div className="flex flex-col items-start py-10 space-y-4 font-medium">
          {menuItems.map((item) => (
            <div key={item.name} className="w-full">
              <button
                type="button"
                className={`flex items-center justify-between w-full px-3 py-3 rounded-lg transition-colors ${
                  openMenu === item.name ? "bg-gray-100" : "bg-transparent"
                }`}
                onClick={() => toggleMenu(item.name)}
              >
                <div className="flex items-center space-x-3">
                  <Iconos name={item.name} />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
                {item.subItems && (
                  <Iconos
                    name="despliegue"
                    className={`ml-3 transform transition-transform ${
                      openMenu === item.name ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </button>
              {openMenu === item.name && (
                <div className="ml-7 mt-2 space-y-2">
                  {item.subItems.map((subItem, index) => (
                    <button
                      key={index}
                      className="flex items-center text-gray-600 hover:text-purple-600 text-sm py-1"
                    >
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Tipografia>
      <div className="p-4">
        <button 
          className="flex items-center justify-between w-full px-5 py-4 bg-gradient-to-r from-purple-500 to-purple-900 hover:from-purple-600 hover:to-purple-900 text-white rounded-lg"
          onClick={handleLogout}
        >
          <div className="flex items-center space-x-5">
            <Iconos name="cerrar-sesion" className="text-white" />
            <span className="text-base">
              <Tipografia>Cerrar sesión</Tipografia>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavegacionUsuario;