import React, { useState } from "react";
import Encabezado from "../../components/molecules/Encabezado";
import Boton from "../../components/atoms/Botones";
import Buscador from "../../components/molecules/Buscador";
import FiltroOpciones from "../../components/molecules/FiltroOpciones";
import Card from "../../components/organisms/Card";

const GestionUsuarios = () => {
  const [usuarios, setUsuarios] = useState([
    { nombre: "María Camila Uribe", celular: "3758460232", Rol: "Colaborador" },
    { nombre: "Juan Pérez", celular: "3142567890", Rol: "Administrador" },
    { nombre: "Ana Gómez", celular: "3004567890", Rol: "Colaborador" },
    { nombre: "Carlos Ramírez", celular: "3216549870", Rol: "Administrador" },
    { nombre: "Laura Méndez", celular: "3001234567", Rol: "Colaborador" },
    { nombre: "Sofía Herrera", celular: "3127654321", Rol: "Administrador" },
  ]);

  const [filtro, setFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const usuariosFiltrados = usuarios.filter(
    (usuario) =>
      (filtro === "Todos" || usuario.Rol === filtro) &&
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="mb-2">
        <Encabezado mensaje="Gestión de usuario" />
      </div>
      <div>
        <Buscador
          placeholder="Buscar Usuario"
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <div className="m-1 p-2 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <FiltroOpciones
          opciones={["Todos", "Colaborador", "Administrador"]}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full sm:w-auto"
        />

        <Boton
          label="Registrar Usuario"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg sm:ml-4"
        />
      </div>
      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 px-4 md:px-10 lg:px-20 w-full justify-items-center">
          {usuariosFiltrados.length > 0 ? (
            usuariosFiltrados.map((usuario, index) => (
              <Card
                key={index}
                nombre={usuario.nombre}
                celular={usuario.celular}
                Rol={usuario.Rol}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No se encontraron usuarios.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GestionUsuarios;
