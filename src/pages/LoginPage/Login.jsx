import React from "react";
import { useNavigate } from "react-router-dom"; 
import Tipografia from "../../components/atoms/Tipografia";
import Logo from "../../components/atoms/Logo";
import CamposTexto from "../../components/atoms/CamposTexto";
import Botones from "../../components/atoms/Botones";
import image from "../../assets/pixelcut-export (1).jpg";

const Login = () => {
  const navigate = useNavigate(); 

  return (
    <Tipografia>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-2/3 h-full bg-cover">
          <img
            src={image}
            alt="Login"
            className="w-full h-full md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/5 flex flex-col justify-between bg-white p-7">
          <div className="flex flex-col justify-center items-center flex-grow ">
          <Logo className="m-6" />
            <div className="w-full max-w-xs flex flex-col items-center">
              <CamposTexto label="Correo electrónico" type="email" />
              <CamposTexto label="Contraseña" type="password" />
              <p
                className="text-gray-700 text-sm text-right mt-2 cursor-pointer w-full text-center font-semibold"
                onClick={() => navigate("/recuperar-password")} 
              >
                ¿Olvidaste la contraseña?
              </p>
              <div className="mt-5 w-full flex justify-center">
                <Botones label="Iniciar sesión" className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600" />
              </div>
            </div>
          </div>
          <footer className="text-sm text-gray-500 text-center py-4">
            © TatSoft 2024 Dirección IP
          </footer>
        </div>
      </div>
    </Tipografia>
  );
};

export default Login;
