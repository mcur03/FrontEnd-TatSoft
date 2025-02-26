import React, { useState } from "react";
import Encabezado from "../../components/molecules/Encabezado";
import Tipografia from "../../components/atoms/Tipografia";
import CampoTexto from "../../components/atoms/CamposTexto";
import Boton from "../../components/atoms/Botones";

const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    numeroCelular: "",
    correoElectronico: "",
    rol: "",
    password: "",
    confirmarPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", formData);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="w-screen absolute left-0 right-">
          <Encabezado mensaje="Registro de usuario" />
        </div>
        <div className="p-5 pt-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Tipografia>
              <CampoTexto
                type="text"
                name="nombre"
                label="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                required
              />

              <CampoTexto
                type="text"
                name="apellido"
                label="Apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                required
              />

              <CampoTexto
                type="text"
                name="cedula"
                label="Número de identificación"
                value={formData.cedula}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                required
              />

              <CampoTexto
                type="tel"
                name="numeroCelular"
                label="Teléfono celular"
                value={formData.numeroCelular}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                required
              />

              <CampoTexto
                type="email"
                name="correoElectronico"
                label="Correo electrónico"
                value={formData.correoElectronico}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                required
              />

              <div className="relative">
                <select
                  name="rol"
                  value={formData.rol}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 pb-2 appearance-none focus:border-purple-500 focus:outline-none"
                  required
                >
                  <option value="">Seleccionar rol</option>
                  <option value="colaborador">Colaborador</option>
                  <option value="administrador">Administrador</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <CampoTexto
                type="password"
                name="password"
                label="Contraseña"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                required
              />

              <CampoTexto
                label="Confirmar contraseña"
                type="password"
                name="confirmarPassword"
                value={formData.confirmarPassword}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                required
              />
            </Tipografia>
            <div className="flex justify-center">
              <Boton tipo="secundario" label="Registrar" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuario;