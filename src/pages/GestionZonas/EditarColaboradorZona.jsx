import React from "react";
import { useNavigate } from "react-router-dom";
import Tipografia from '../../components/atoms/Tipografia';
import Boton from '../../components/atoms/Botones';

const EditarColaboradorZona = () => {
  const navigate = useNavigate();

  // Lista de colaboradores asignados a la zona
  const colaboradores = [
    { id: 1, nombre: "María Camila Uribe", cel: "3133490202", rol: "Colaborador" },
    { id: 2, nombre: "Estefania Nieto Gonzalez", cel: "3133490202", rol: "Colaborador" },
    { id: 3, nombre: "Gisela Rivera Londoño", cel: "3133490202", rol: "Colaborador" },
    { id: 4, nombre: "Jhoan Sebastian Muñoz", cel: "3133490202", rol: "Colaborador" },
  ];

  const handleRemoveColaborador = (id) => {
    console.log(`Eliminar colaborador con ID: ${id}`);
    // Aquí iría la lógica para eliminar el colaborador
  };

  const handleAgregarClick = () => {
    navigate("/gestion-zonas/asignar");
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
        <button 
          onClick={() => navigate("/gestion-zonas/colaboradores")} 
          className="text-white flex items-center justify-center rounded-full bg-white bg-opacity-30 h-10 w-10"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <Tipografia variant="h1" size="xl" className="text-white font-medium">
          Zona Norte Armenia
        </Tipografia>
        <div className="w-10"></div> {/* Espacio para equilibrar el header */}
      </div>
      
      {/* Editando título */}
      <div className="text-center my-4">
        <Tipografia variant="h2" size="lg" className="text-gray-700">
          Editando
        </Tipografia>
      </div>

      {/* Botón Agregar */}
      <div className="px-6 mb-4">
        <button
          onClick={handleAgregarClick}
          className="bg-purple-500 text-white py-2 px-6 rounded-md"
        >
          Agregar
        </button>
      </div>
      
      {/* Lista de colaboradores en dos columnas */}
      <div className="px-6 flex-grow">
        <div className="grid grid-cols-2 gap-4">
          {colaboradores.map((colaborador) => (
            <div 
              key={colaborador.id} 
              className="border rounded-lg p-4 relative"
            >
              <button
                onClick={() => handleRemoveColaborador(colaborador.id)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center"
              >
                ✕
              </button>
              <Tipografia>
                <div className="mb-1">
                  <span className="font-medium">Nombre:</span> {colaborador.nombre}
                </div>
                <div className="mb-1">
                  <span className="font-medium">Cel:</span> {colaborador.cel}
                </div>
                <div>
                  <span className="font-medium">Rol:</span> {colaborador.rol}
                </div>
              </Tipografia>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditarColaboradorZona;