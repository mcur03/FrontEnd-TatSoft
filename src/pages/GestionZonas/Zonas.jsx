import React from "react";
import { useNavigate } from "react-router-dom";

const zonas = ["Zona A", "Zona B", "Zona C", "Zona D", "Zona E"];

const clientes = [
  {
    cc: "12097731666",
    nombre: "María Camila Uribe",
    nit: "111111-4",
    razonSocial: "CamilaR",
    telefono: "(606 111 22 33)",
  },
  // Puedes duplicar estos objetos para mostrar más clientes
];

const Zonas = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex items-center justify-between">
        <button className="text-white text-2xl">&#9776;</button>
        <h2 className="text-xl font-bold">Zonas</h2>
      </div>

      {/* Sección de Zonas */}
      <div className="flex items-center justify-center gap-2 p-4 flex-wrap">
        {zonas.map((zona, index) => (
          <button
            key={index}
            onClick={() => navigate(`/zona/${zona.toLowerCase().replace(" ", "-")}`)}
            className="bg-white p-2 rounded-lg shadow-md hover:bg-purple-200 transition"
          >
            {zona}
          </button>
        ))}
      </div>

      {/* Título y Botón Nuevo Cliente */}
      <div className="flex justify-between items-center px-6">
        <h3 className="text-2xl font-bold text-purple-700">Zona A</h3>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center">
          Nuevo Cliente <span className="ml-2">➕</span>
        </button>
      </div>

      {/* Lista de Clientes */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clientes.map((cliente, index) => (
          <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
            <p><strong>CC:</strong> {cliente.cc}</p>
            <p><strong>Nombre:</strong> {cliente.nombre}</p>
            <p><strong>Nit:</strong> {cliente.nit}</p>
            <p><strong>Razón Social:</strong> {cliente.razonSocial}</p>
            <p><strong>Teléfono:</strong> {cliente.telefono}</p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
              Realizar preventa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zonas;
