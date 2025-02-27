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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 text-xl font-bold flex items-center">
          <button onClick={() => navigate("/gestion-zonas")} className="text-white text-2xl mr-4">
            &#8592;
          </button>
          Registrar Zona
        </div>
        <form onSubmit={handleGuardarClick} className="p-6 space-y-4">
          <div>
            <label className="font-bold">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={zona.nombre}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="font-bold">Ubicación:</label>
            <LoadScriptNext googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "200px" }}
                center={zona.ubicacion}
                zoom={15}
                onClick={handleMapClick}
              >
                <Marker position={zona.ubicacion} />
              </GoogleMap>
            </LoadScriptNext>
          </div>
          <div>
            <label className="font-bold">Descripción:</label>
            <textarea
              name="descripcion"
              value={zona.descripcion}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 bg-purple-600 text-white p-2 rounded-lg text-lg"
            >
              Guardar
            </button>
          </div>
        </form>
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
            <p className="text-lg font-semibold">Zona registrada con éxito</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrarZona;
