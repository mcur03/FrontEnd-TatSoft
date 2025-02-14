import React from "react";
import Tipografia from "../atoms/Tipografia";
import Icono from "../atoms/Iconos";

const Encabezado = ({ mensaje = "Catálogo", icono = "volver", onClick }) => {
    return (
        <div className="flex items-center bg-gradient-to-r from-purple-900 to-purple-600 p-4 rounded-b-2xl shadow-md">
            <div onClick={onClick} className="cursor-pointer">
                <Icono name={icono} size="30" className="w-12 h-12 text-white" />
            </div>
            <Tipografia variant="h1" size="2xl"className="ml-auto m-1 text-white font-semibold">
                {mensaje}
            </Tipografia>
        </div>
    );
};

export default Encabezado;
