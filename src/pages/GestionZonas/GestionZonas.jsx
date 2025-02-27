import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icono from "../../components/atoms/Iconos";

const GestionZonas = () => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [eliminado, setEliminado] = useState(false);

  const handleEliminarClick = () => {
    setMostrarAlerta(true);
  };

  const handleConfirmarEliminar = () => {
    setMostrarAlerta(false);
    setEliminado(true);
    setTimeout(() => setEliminado(false), 2000);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Encabezado */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 text-xl font-bold flex items-center justify-between w-full">
        <button onClick={() => window.history.back()} className="text-white text-2xl">&#8592;</button>
        <span>Gestión de Zonas</span>
        <Link to="/registrar-zona" className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-bold">
          Registrar zona
        </Link>
      </div>

      {/* Buscador */}
      <div className="w-full flex justify-center p-4">
        <input type="text" placeholder="Buscar Zona" className="w-1/2 p-2 border rounded-lg" />
      </div>

      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-2 gap-4 p-4 overflow-auto flex-grow">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="p-4 border rounded-lg shadow bg-gray-50">
            <h3 className="font-bold">Zona Norte Armenia</h3>
            <p><strong>Ubicación:</strong> Coordenadas: 23.6345, -102.5528</p>
            <p className="text-sm text-gray-600">Área asignada para operaciones en la región norte de la ciudad de Armenia.</p>
            <div className="flex justify-between mt-2">
              <Link to="/editar-zona" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                Editar
              </Link>
              <button onClick={handleEliminarClick} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Alerta de Confirmación */}
      {mostrarAlerta && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Icono name="eliminarAlert" size={50} className="mx-auto mb-4" />
            <p className="text-lg font-semibold">¿Desea eliminar la zona?</p>
            <div className="flex justify-center mt-4">
              <button onClick={() => setMostrarAlerta(false)} className="bg-red-400 text-white px-4 py-2 rounded-lg mx-2">Cancelar</button>
              <button onClick={handleConfirmarEliminar} className="bg-green-400 text-white px-4 py-2 rounded-lg mx-2">Confirmar</button>
            </div>
          </div>
        </div>
      )}

      {/* Alerta de Eliminación Exitosa */}
      {eliminado && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Icono name="confirmar" size={50} className="mx-auto mb-4" />
            <p className="text-lg font-semibold">Zona eliminada</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestionZonas;
