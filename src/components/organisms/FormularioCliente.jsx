import React, { useState } from "react";
import CampoTexto from "../atoms/CamposTexto";
import Botones from "../atoms/Botones";
import Tipografia from "../atoms/Tipografia";

const FormularioCliente = () => {
  const [Data, SetData] = useState({
    razonSocial: "",
    nombre: "",
    apellido: "",
    celular: "",
    nit: "",
    direccion: "",
    correoElectronico: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    SetData({ ...Data, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-5 bg-white rounded-lg"
      >
        <Tipografia variant="p" className="text-[#000000]">
          <CampoTexto
            label="Razón Social"
            id="razonSocial"
            type="text"
            placeholder="Ejemplo: ABC S.A.S"
            value={Data.razonSocial}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Nombre"
            id="nombre"
            type="text"
            placeholder="Ingrese el nombre completo del cliente"
            value={Data.nombre}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Apellido"
            id="apellido"
            type="text"
            placeholder="Ingrese el apellido del cliente"
            value={Data.apellido}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Celular"
            id="celular"
            type="text"
            placeholder="Ingrese el número de celular del cliente"
            value={Data.celular}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="NIT"
            id="nit"
            type="text"
            placeholder="Ingrese el NIT del cliente"
            value={Data.nit}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Dirección"
            id="direccion"
            type="text"
            placeholder="Ingrese la dirección del cliente"
            value={Data.direccion}
            onChange={handleChange}
            required
          />
          <CampoTexto
            label="Correo Electrónico"
            id="correoElectronico"
            type="email"
            placeholder="Ingrese el correo electrónico del cliente"
            value={Data.correoElectronico}
            onChange={handleChange}
            required
          />
        </Tipografia>
        <div className="flex justify-center mt-3">
          <Botones label="Registrar" tipo="primario" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default FormularioCliente;
