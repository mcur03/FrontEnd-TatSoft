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
      <div className="flex flex-col items-center justify-center h-screen bg-white relative">
        <div className="absolute top-5 left-7">
          <Icono 
            name="volver" 
            customColor="black" 
            size={40} 
            className="cursor-pointer" 
            onClick={() => navigate("/")}
          />
        </div>
        <div className="w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold mb-6 p-3">Recuperar Contraseña</h1>
          <p className="text-gray-600 mb-6">
            ¿Oops! <span className="font-semibold">¿Olvidaste la contraseña?</span> <br />
            Por favor, introduce tu dirección de correo electrónico y te
            enviaremos un código de verificación.
          </p>

          <div className="relative w-full flex flex-col items-center">
            <CampoTexto type="email" placeholder="Correo electrónico" />
          </div>
          <Boton label="Continuar" 
          onClick={() => navigate("/codigo-verificacion")} />
        </div>
        <footer className="absolute bottom-6 text-gray-500 text-sm">
          © TatSoft 2024 | Desarrollado por TatSoft 
        </footer>
      </div>
    </Tipografia>
  );
};

export default OlvidarPassword;
