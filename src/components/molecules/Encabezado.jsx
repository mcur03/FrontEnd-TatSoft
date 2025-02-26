import React from "react";
import Tipografia from "../atoms/Tipografia";
import Icono from "../atoms/Iconos";

const Encabezado = ({ mensaje = "", icono = "volver", onClick, ruta = "", className = "" }) => {
  const handleClick = () => {
    if (ruta) {
      // Usar window.location en lugar de useNavigate
      window.location.href = ruta;
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`flex items-center bg-gradient-to-r from-purple-900 to-purple-600 p-3 rounded-b-2xl shadow-md ${className}`}>
      <div onClick={handleClick} className="cursor-pointer">
        <Icono name={icono} size="40" className="w-10 h-11 text-white"/>
      </div>
      <Tipografia variant="h1" size="2xl" className="ml-auto m-1 text-white font-semibold">
        {mensaje}
      </Tipografia>
    </div>
  );
};

export default Encabezado;