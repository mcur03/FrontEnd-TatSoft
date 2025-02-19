import React from "react";
import { useNavigate } from "react-router-dom";
import Tipografia from "../../components/atoms/Tipografia";
import Boton from "../../components/atoms/Botones";
import Icono from "../../components/atoms/Iconos";
import CampoTexto from "../../components/atoms/CamposTexto";

const Restablecer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 sm:px-10">
      <Tipografia>
        <div className="absolute top-5 left-7 sm:left-10">
          <Icono
            name="volver"
            customColor="black"
            size={40}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="w-full max-w-sm text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Restablecer contraseña
          </h1>
          <p className="text-gray-600 mb-5 text-sm sm:text-base">
            Crea una nueva contraseña para tu cuenta. Asegúrate de que sea
            segura y distinta a contraseñas usadas antes.
          </p>
        </div>
        <div className="w-full max-w-sm">
          <div className="relative mb-4">
            <Icono
              name="candado"
              className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400"
            />
            <CampoTexto
              type="password"
              label="Nueva contraseña"
              className="pl-10 pr-4 py-2 border rounded-lg w-full text-sm sm:text-base"
            />
          </div>
          <div className="relative mb-6">
            <Icono
              name="candado"
              className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400"
            />
            <CampoTexto
              type="password"
              label="Confirmar contraseña"
              className="pl-10 pr-4 py-2 border rounded-lg w-full text-sm sm:text-base"
            />
          </div>

          <div className="flex justify-center">
            <Boton label="Guardar" className="w-full max-w-xs sm:max-w-sm" />
          </div>
        </div>
      </Tipografia>
    </div>
  );
};

export default Restablecer;
