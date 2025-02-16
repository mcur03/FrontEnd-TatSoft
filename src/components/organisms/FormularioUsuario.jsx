import React, { useState } from "react";
import CampoTexto from "../atoms/CamposTexto";
import Botones from "../atoms/Botones";
import Tipografia from "../atoms/Tipografia";

const FormularioUsuario = () => {
  const [FormData, SetFormData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    NumeroCelular: "",
    CorreoElectronico: "",
    rol: "",
    contrasena: "",
    confirmarContraseña: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    SetFormData({ ...FormData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (FormData.contrasena !== FormData.confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Datos enviados", FormData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-5 bg-white rounded-lg" 
      >
        <Tipografia variant="p" className="text-[#000000]">
          <CampoTexto
            label="Nombre"
            id="nombre"
            type="text"
            placeholder="Ingrese el nombre"
            value={FormData.nombre}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Apellido"
            id="apellido"
            type="text"
            placeholder="Ingrese el apellido"
            value={FormData.apellido}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Cédula"
            id="cedula"
            type="text"
            placeholder="Ingrese la cédula"
            value={FormData.cedula}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Número de Celular"
            id="NumeroCelular"
            type="text"
            placeholder="Ingrese el número de celular"
            value={FormData.NumeroCelular}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Correo Electrónico"
            id="CorreoElectronico"
            type="email"
            placeholder="Ingrese el correo electrónico"
            value={FormData.CorreoElectronico}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Rol"
            id="rol"
            type="text"
            placeholder="Ingrese el rol (colaborador, administrador)"
            value={FormData.rol}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Contraseña"
            id="contrasena"
            type="password"
            placeholder="Ingrese la contraseña"
            value={FormData.contrasena}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Confirmar Contraseña"
            id="confirmarContraseña"
            type="password"
            placeholder="Ingrese la contraseña de confirmación"
            value={FormData.confirmarContraseña}
            onChange={handleChange}
            required
          />
          <div className="flex justify-center mt-4">
            <Botones label="Registrar" tipo="primario" type="submit" />
          </div>
        </Tipografia>
      </form>
    </div>
  );
};

export default FormularioUsuario;
