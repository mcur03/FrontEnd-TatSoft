import React from "react";
import { useNavigate } from "react-router-dom";
import Tipografia from '../../components/atoms/Tipografia';
import Icono from '../../components/atoms/Iconos';
import Boton from '../../components/atoms/Botones';

const ColaboradoresZona = () => {
  const navigate = useNavigate();

  // Datos de la zona
  const zonaData = {
    nombre: "Zona Norte Armenia",
    ubicacion: { lat: 23.6345, lng: -102.5528 },
    descripcion: "Área asignada para operaciones en la región norte de la ciudad de Armenia abarcado desde el parque fundadores hasta el cc portal del Quindío"
  };

  // Lista de colaboradores asignados a la zona
  const colaboradores = [
    { id: 1, nombre: "María Camila Uribe", cel: "3133490202", rol: "Colaborador" },
    { id: 2, nombre: "Estefania Nieto Gonzalez", cel: "3133490202", rol: "Colaborador" },
    { id: 3, nombre: "Gisela Rivera Londoño", cel: "3133490202", rol: "Colaborador" },
    { id: 4, nombre: "Jhoan Sebastián Muñoz", cel: "3133490202", rol: "Colaborador" },
  ];

  const handleEditarClick = () => {
    navigate("/gestion-zonas/editar");
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 flex items-center justify-between">
        <button 
          onClick={() => navigate("/gestion-zonas")} 
          className="text-white flex items-center justify-center rounded-full bg-white bg-opacity-30 h-10 w-10"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <Tipografia variant="h1" size="xl" className="text-white font-medium">
          {zonaData.nombre}
        </Tipografia>
        <div className="w-10"></div> {/* Espacio para equilibrar el header */}
      </div>
      
      {/* Información de la zona */}
      <div className="px-6 py-4">
        <div className="border rounded-lg p-4 mb-4">
          <Tipografia>
            <div className="mb-3">
              <span className="font-medium">Ubicación:</span> Coordenadas: {zonaData.ubicacion.lat}, {zonaData.ubicacion.lng}
            </div>
            <div>
              <span className="font-medium">Descripción:</span> {zonaData.descripcion}
            </div>
          </Tipografia>
          <div className="flex justify-end mt-2">
            <button
              onClick={handleEditarClick}
              className="bg-purple-500 text-white py-1 px-6 rounded-md text-sm"
            >
              Editar
            </button>
          </div>
        </div>
      </div>
      
      {/* Lista de colaboradores */}
      <div className="px-6 flex-grow">
        {colaboradores.map((colaborador) => (
          <div 
            key={colaborador.id} 
            className="border rounded-lg p-4 mb-4"
          >
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
  );
};

export default ColaboradoresZona;