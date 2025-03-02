import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userService } from "../../context/services/ApiService";
import AvatarTexto from "../../components/molecules/AvatarTexto";
import CampoTextoProfile from "../../components/atoms/CamposTextoProfile";
import Tipografia from "../../components/atoms/Tipografia";
import Boton from "../../components/atoms/Botones";
import CampoTexto from "../../components/atoms/CamposTexto";
import AlertaEdicion from "./AlertaEdicion";
import Icono from "../../components/atoms/Iconos";

const EditarUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    cc: "",
    correo: "",
    rol: "",
  });
  const [originalData, setOriginalData] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await userService.getUserById(id);
        const user = response.data;
        
        // Dividir el nombre completo en nombre y apellido
        const fullNameParts = user.nombreCompleto.split(" ");
        const nombre = fullNameParts[0] || "";
        const apellido = fullNameParts.slice(1).join(" ") || "";
        
        const formattedData = {
          nombre,
          apellido,
          celular: user.celular,
          cc: user.cedula,
          correo: user.correo,
          rol: user.rol,
        };
        
        setUserData(formattedData);
        setOriginalData(formattedData);
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
        setError("Error al cargar los datos del usuario. Por favor, intenta de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  const handleChange = (field, value) => {
    if (field === "cc") {
      return; // No se permite editar el número de cédula
    }
   
    let stringValue = '';
    if (value && typeof value === 'object' && value.target) {
      stringValue = value.target.value;
    }
    else if (value === '' || value === null || value === undefined) {
      stringValue = '';
    }
    else {
      stringValue = String(value);
    }
   
    if (field === "celular" && stringValue !== '') {
      if (!/^\d*$/.test(stringValue)) {
        return;
      }
    }
   
    setUserData(prev => ({
      ...prev,
      [field]: stringValue
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      
      // Formato de los datos para la API
      const updatedUser = {
        cedula: userData.cc,
        nombreCompleto: `${userData.nombre} ${userData.apellido}`.trim(),
        celular: userData.celular,
        correo: userData.correo,
        rol: userData.rol.toLowerCase()
      };
      
      // Llamada a la API para actualizar el usuario
      await userService.updateUser(id, updatedUser);
      
      setSuccess(true);
      setShowAlert(true);
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      setError("Error al guardar los cambios. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setUserData({...originalData});
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    if (success) {
      navigate(`/ver/usuario/${id}`);
    }
  };

  const handleVolver = () => {
    navigate(`/ver/usuario/${id}`);
  };

  const nombreStr = userData.nombre || '';
  const apellidoStr = userData.apellido || '';
  const fullName = `${nombreStr} ${apellidoStr}`.trim();

  if (loading && !userData.nombre) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Tipografia>Cargando información del usuario...</Tipografia>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">  
      <div className="max-w-4xl mx-auto px-10 py-3">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-700 p-6 relative">
            <div className="absolute top-4 left-4 cursor-pointer" onClick={handleVolver}>
              <Icono name="volver" size={45} color="white" />
            </div>
           
            <div className="flex flex-col items-center">
              <div className="mb-3 transform hover:scale-105 transition-transform duration-300">
                <AvatarTexto nombre={fullName} size="medium" />
              </div>
              {userData.rol && (
                <div className="px-4 py-1 bg-white bg-opacity-20 rounded-full">
                  <Tipografia className="text-white">{userData.rol}</Tipografia>
                </div>
              )}
            </div>
          </div>

          <div className="p-4 md:p-1">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            <div className="flex justify-between items-center ">
              <Tipografia size="xl" className="font-semibold text-gray-600 px-4 mb-1">
                Editando Usuario
              </Tipografia>
            </div>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="shadow-md p-7 rounded-xl">
                <Tipografia className="text-purple-700 font-medium mb-4">
                  Información Personal
                </Tipografia>
                <div className="space-y-5">
                  <CampoTextoProfile
                    label="Nombre"
                    value={userData.nombre}
                    editable={true}
                    onChange={(value) => handleChange("nombre", value)}
                  />
                  <CampoTextoProfile
                    label="Apellido"
                    value={userData.apellido}
                    editable={true}
                    onChange={(value) => handleChange("apellido", value)}
                  />
                  <CampoTexto
                    label="Documento de Identidad"
                    value={userData.cc}
                    readOnly={true}
                    disabled={true}
                    type="text"
                  />
                </div>
              </div>
              <div className="p-7 shadow-md rounded-xl">
                <Tipografia className="text-purple-700 font-medium mb-4">
                  Información de Contacto
                </Tipografia>
                <div className="space-y-5">
                  <CampoTextoProfile
                    label="Celular"
                    value={userData.celular}
                    editable={true}
                    onChange={(value) => handleChange("celular", value)}
                    type="text"
                  />
                  <CampoTextoProfile
                    label="Correo Electrónico"
                    value={userData.correo}
                    editable={true}
                    onChange={(value) => handleChange("correo", value)}
                    type="text"
                  />
                  <CampoTextoProfile
                    label="Rol en la Empresa"
                    value={userData.rol}
                    editable={true}
                    onChange={(value) => handleChange("rol", value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-center w-full gap-3 pb-4">
              <Boton
                tipo="primario"
                label={loading ? "Guardando..." : "Guardar Cambios"}
                onClick={handleSave}
                className="w-full sm:w-auto px-4 py-2"
                disabled={loading}
              />
              <Boton
                tipo="cancelar"
                label="Cancelar"
                onClick={handleCancel}
                className="w-full sm:w-auto px-4 py-2"
                disabled={loading}
              />
            </div>
          </div>
        </div>
      </div>

      {showAlert && (
        <AlertaEdicion 
          onClose={handleCloseAlert}
          onConfirm={handleCloseAlert}
          onCancel={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default EditarUsuario;
