import React from "react";
import { useNavigate } from "react-router-dom";
import Tipografia from "../../components/atoms/Tipografia";
import Boton from "../../components/atoms/Botones";
import CampoTexto from "../../components/atoms/CamposTexto";
import Icono from "../../components/atoms/Iconos";

const OlvidarPassword = () => {
  const navigate = useNavigate();

  return (
    <Tipografia>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white relative px-6 sm:px-10">
        <div className="absolute top-5 left-5 sm:left-7">
          <Icono
            name="volver"
            customColor="black"
            size={40}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md text-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 p-2">Recuperar Contraseña</h1>
          <p className="text-gray-600 text-sm sm:text-base mb-5 ">
            ¿Oops! <span className="font-semibold">¿Olvidaste la contraseña?</span>
            <br />
            Por favor, introduce tu dirección de correo electrónico y te
            enviaremos un código de verificación.
          </p>

          <div className="relative w-full flex items-center">
            <Icono
              name="correo"
              className="absolute left-3 sm:left-3 top-5 transform -translate-y-1/2 text-gray-400"
            />
            <CampoTexto
              type="email"
              placeholder="Correo electrónico"
              className="w-full pl-11 pr-4 py-2 border rounded-lg"
            />
          </div>

          <Boton
            label="Continuar"
            onClick={() => navigate("/codigo-verificacion")}
            className="mt-4 w-full"
          />
        </div>
        <footer className="absolute bottom-4 text-gray-500 text-xs sm:text-sm">
          © TatSoft 2024 | Desarrollado por TatSoft
        </footer>
      </div>
    </Tipografia>
  );
};

export default OlvidarPassword;
