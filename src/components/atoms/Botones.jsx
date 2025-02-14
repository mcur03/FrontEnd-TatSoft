import React from "react";
import Tipografia from "./Tipografia";

const Boton = ({ 
  label, 
  onClick, 
  tipo = "primario", 
  size = "medium", 
  textSize = "base" 
}) => {
  const tipos = {
    primario: "bg-[#B06AFF] hover:bg-purple-600",
    secundario: "bg-[#842AF3] hover:bg-purple-800",
    alerta: "bg-[#A5F6A5] hover:bg-green-300",
    cancelar: "bg-[#F48783] hover:bg-red-400",
  };

  const tamaños = {
    small: "w-[130px] h-[32px]",
    medium: "w-[160px] h-[35px]",
    large: "w-[250px] h-[45px]",
  };

  return (
    <Tipografia size={textSize}>
      <button
        className={`font-bold text-white m-2 rounded-[12px] cursor-pointer transition-colors duration-200 ${tipos[tipo]} ${tamaños[size]}`}
        onClick={onClick}
      >
        {label}
      </button>
    </Tipografia>
  );
};

export default Boton;