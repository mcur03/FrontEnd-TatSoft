import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Tipografia from "../../components/atoms/Tipografia";
import Boton from "../../components/atoms/Botones";
import Icono from "../../components/atoms/Iconos";

const CodigoVerificacion = () => {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const nuevoCodigo = [...codigo];
    nuevoCodigo[index] = value;
    setCodigo(nuevoCodigo);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <Tipografia>
      <div className="flex flex-col items-center justify-center h-screen bg-white relative ">
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
          <h1 className="text-2xl font-bold mb-6 p-3">
            Introduce tu código de verificación
          </h1>
          <p className="text-black-600 mb-7 p-3">
            Hemos enviado un código de verificación de <span className="font-semibold">4</span> dígitos a tu correo
            electrónico. Por favor, ingrésalo a continuación para continuar con
            la recuperación de tu contraseña.
          </p>

          <div className="flex justify-end w-full pr-3 mb-5">
            <p className="text-black-800 text-sm p-1">
              ¿No recibiste el código? <span className="font-semibold cursor-pointer text-purple-800">Reenviar</span>
            </p>
          </div>

          <div className="flex space-x-6 justify-center mb-6">
            {codigo.map((num, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl border-2 border-purple-200 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            ))}
          </div>
          <Boton label="Verificar código"
          onClick={()=> navigate ("/restablecer")}
          />
        </div>

        <footer className="absolute bottom-6 text-gray-500 text-sm">
          © TatSoft 2024 | Desarrollado por TatSoft 
        </footer>
      </div>
    </Tipografia>
  );
};

export default CodigoVerificacion;
