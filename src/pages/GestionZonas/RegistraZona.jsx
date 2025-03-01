import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";

const RegistrarZona = () => {
  const navigate = useNavigate();

  const [zona, setZona] = useState({
    nombre: "",
    ubicacion: { lat: 23.6345, lng: -102.5528 },
    descripcion: "",
  });

  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [guardado, setGuardado] = useState(false);

  const handleChange = (e) => {
    setZona({ ...zona, [e.target.name]: e.target.value });
  };

  const handleMapClick = (event) => {
    setZona({
      ...zona,
      ubicacion: { lat: event.latLng.lat(), lng: event.latLng.lng() },
    });
  };

  const handleGuardarClick = (e) => {
    e.preventDefault();
    setMostrarAlerta(true);
  };

  const handleConfirmarGuardar = () => {
    setMostrarAlerta(false);
    setGuardado(true);
    console.log("Zona registrada", zona);
    setTimeout(() => navigate("/gestion-zonas"), 2000);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 flex items-center">
        <button onClick={() => navigate("/gestion-zonas")} className="text-white mr-4 flex items-center justify-center rounded-full bg-white bg-opacity-30 h-8 w-8">
          <span>&#8592;</span>
        </button>
        <span className="text-xl font-medium">Registrar Zona</span>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col space-y-4 flex-grow">
        {/* Nombre */}
        <div>
          <label className="font-medium">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={zona.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 text-sm"
            required
          />
        </div>
        
        {/* Ubicación */}
        <div>
          <label className="font-medium">Ubicación:</label>
          <div className="text-sm mt-1 mb-2">
            Coordenadas: {zona.ubicacion.lat}, {zona.ubicacion.lng}
          </div>
          {/* 
            Si tienes la API key, usa este bloque:
            <LoadScriptNext googleMapsApiKey="TU_API_KEY_REAL_AQUI">
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "200px", borderRadius: "4px" }}
                center={zona.ubicacion}
                zoom={15}
                onClick={handleMapClick}
              >
                <Marker position={zona.ubicacion} />
              </GoogleMap>
            </LoadScriptNext>
          */}
          
          {/* Alternativa temporal mientras obtienes la API key */}
          <div 
            className="w-full h-48 bg-gray-200 rounded flex items-center justify-center cursor-pointer"
            onClick={(e) => {
              // Simulación de clic en mapa
              const randomLat = 23.6345 + (Math.random() - 0.5) * 0.01;
              const randomLng = -102.5528 + (Math.random() - 0.5) * 0.01;
              setZona({
                ...zona,
                ubicacion: { lat: randomLat, lng: randomLng }
              });
            }}
          >
            <div className="text-center text-gray-600">
              <div className="text-3xl mb-2">📍</div>
              <div>Haz clic para simular selección de ubicación</div>
              <div className="text-xs mt-1">(Se requiere API key de Google Maps para mostrar el mapa real)</div>
            </div>
          </div>
        </div>
        
        {/* Descripción */}
        <div>
          <label className="font-medium">Descripción:</label>
          <textarea
            name="descripcion"
            value={zona.descripcion}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 text-sm h-24"
            required
          />
        </div>
        
        {/* Button */}
        <div className="flex justify-center mt-4">
          <button 
            onClick={handleGuardarClick} 
            className="bg-purple-500 text-white py-2 px-4 rounded-md w-full max-w-xs"
          >
            Guardar
          </button>
        </div>
      </div>

      {/* Alerta de Confirmación */}
      {mostrarAlerta && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">¿Desea registrar esta zona?</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setMostrarAlerta(false)}
                className="bg-red-400 text-white px-4 py-2 rounded-lg mx-2"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmarGuardar}
                className="bg-green-400 text-white px-4 py-2 rounded-lg mx-2"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alerta de Registro Exitoso */}
      {guardado && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-5xl mb-3">😊</div>
            <p className="text-lg font-semibold">Zona registrada con éxito</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrarZona;