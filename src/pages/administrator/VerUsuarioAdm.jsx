import React, { useState } from "react";
import Tipografia from "../../components/atoms/Tipografia";
import Botones from "../../components/atoms/Botones";
import Encabezado from "../../components/molecules/Encabezado";
import AvatarUsuario from "../../components/atoms/AvatarUsuario";
import AlertaInhabilitar from "../../pages/administrator/AlertaInhabilitar";

const VerUsuario = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [userStatus, setUserStatus] = useState("activo");

  const userData = {
    nombre: "Gisela",
    apellido: "Rivera Londoño",
    cc: "1097735978",
    celular: "3097735678",
    correo: "gisela@gmail.com",
    rol: "Colaborador",
    foto: null,
    estado: userStatus, 
  };

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleConfirmStatusChange = () => {
    setUserStatus(userStatus === "activo" ? "inactivo" : "activo");
    setShowAlert(false);
  };

  const handleEditarUsuario = () => {
    window.location.href = "/editar/usuario";
  };

  const buttonText = userStatus === "activo" ? "Inhabilitar" : "Habilitar";
  const alertText = userStatus === "activo" 
    ? "¿Confirmas la inhabilitación del usuario?" 
    : "¿Confirmas la habilitación del usuario?";

  return (
    <div className="min-h-screen bg-gray-100">
      <Encabezado ruta="/" mensaje="Perfil de Usuario" />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 md:hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 relative">
              <div className="flex flex-col items-center pt-5 pb-4">
                <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center overflow-hidden mb-2">
                  {userData.foto ? (
                    <img
                      src={userData.foto}
                      alt="Foto de perfil"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-gray-500 text-sm">
                      <AvatarUsuario size="100" />
                    </div>
                  )}
                </div>
                <Tipografia
                  variant="h2"
                  className="text-white text-center font-semibold my-2"
                >
                  {userData.nombre} {userData.apellido}
                </Tipografia>
                <div className="mt-2 w-full flex flex-col sm:flex-row gap-2">
                  <Botones 
                    tipo={userStatus === "activo" ? "cancelar" : "alerta"}
                    label={buttonText} 
                    onClick={handleShowAlert}
                    className="w-full py-2"
                  />
                  <Botones
                    variant="primary"
                    label="Editar Usuario"
                    onClick={handleEditarUsuario}
                    className="w-full py-2"
                  />
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <Tipografia variant="label" className="text-gray-700 text-base">
                  Nombre:
                </Tipografia>
                <Tipografia className="font-medium p-1">
                  {userData.nombre}
                </Tipografia>
              </div>
              <div>
                <Tipografia variant="label" className="text-gray-700 text-base">
                  Apellido:
                </Tipografia>
                <Tipografia className="font-medium p-1">
                  {userData.apellido}
                </Tipografia>
              </div>
              <div>
                <Tipografia variant="label" className="text-gray-700 text-base">
                  CC:
                </Tipografia>
                <Tipografia className="font-medium p-1">{userData.cc}</Tipografia>
              </div>
              <div>
                <Tipografia variant="label" className="text-gray-700 text-base">
                  Celular:
                </Tipografia>
                <Tipografia className="font-medium p-1">
                  {userData.celular}
                </Tipografia>
              </div>
              <div>
                <Tipografia variant="label" className="text-gray-700 text-base">
                  Correo:
                </Tipografia>
                <Tipografia className="font-medium p-1">
                  {userData.correo}
                </Tipografia>
              </div>
              <div>
                <Tipografia variant="label" className="text-gray-700 text-base">
                  Rol:
                </Tipografia>
                <Tipografia className="font-medium p-1">
                  {userData.rol}
                </Tipografia>
              </div>
              <div>
                <Tipografia variant="label" className="text-gray-700 text-base">
                  Estado:
                </Tipografia>
                <Tipografia className={`font-medium p-1 ${userData.estado === "activo" ? "text-green-600" : "text-red-600"}`}>
                  {userData.estado === "activo" ? "Activo" : "Inactivo"}
                </Tipografia>
              </div>
            </div>
          </div>
          <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden md:w-1/3 lg:w-1/4">
            <div className="bg-gradient-to-r from-purple-600 to-purple-900 p-6">
              <div className="flex flex-col items-center">
                <div className="rounded-full mb-3 flex items-center justify-center">
                  {userData.foto ? (
                    <img
                      src={userData.foto}
                      alt="Foto de perfil"
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  ) : (
                    <AvatarUsuario size="130" />
                  )}
                </div>
                <Tipografia
                  variant="h2"
                  className="text-white text-center text-xl lg:text-2xl font-semibold"
                >
                  {userData.nombre} {userData.apellido}
                </Tipografia>
                <Tipografia
                  variant="body"
                  className="text-purple-200 mt-1 text-center"
                >
                  {userData.rol}
                </Tipografia>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <Botones 
                label="Editar Usuario"
                onClick={handleEditarUsuario}
                className="w-full py-2"
              />
              <Botones
                label={buttonText}
                tipo={userStatus === "activo" ? "cancelar" : "alerta"}
                className="w-full py-2"
                onClick={handleShowAlert}
              />
            </div>
          </div>

          <div className="hidden md:block md:w-2/3 lg:w-3/4 bg-white rounded-xl shadow-lg p-6 lg:p-7">
            <Tipografia
              variant="h2"
              className="text-xl font-semibold mb-5 text-purple-900"
            >
              Información Personal
            </Tipografia>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              <div>
                <Tipografia
                  variant="label"
                  className="text-gray-500 text-sm block mb-1"
                >
                  Nombre
                </Tipografia>
                <div className="border border-gray-300 rounded-lg p-2 lg:p-3 bg-gray-50">
                  <Tipografia className="font-medium">
                    {userData.nombre}
                  </Tipografia>
                </div>
              </div>

              <div>
                <Tipografia
                  variant="label"
                  className="text-gray-500 text-sm block mb-1"
                >
                  Apellido
                </Tipografia>
                <div className="border border-gray-300 rounded-lg p-2 lg:p-3 bg-gray-50">
                  <Tipografia className="font-medium">
                    {userData.apellido}
                  </Tipografia>
                </div>
              </div>

              <div>
                <Tipografia
                  variant="label"
                  className="text-gray-500 text-sm block mb-1"
                >
                  Número de Identificación
                </Tipografia>
                <div className="border border-gray-300 rounded-lg p-2 lg:p-3 bg-gray-50">
                  <Tipografia className="font-medium">{userData.cc}</Tipografia>
                </div>
              </div>

              <div>
                <Tipografia
                  variant="label"
                  className="text-gray-500 text-sm block mb-1"
                >
                  Teléfono Celular
                </Tipografia>
                <div className="border border-gray-300 rounded-lg p-2 lg:p-3 bg-gray-50">
                  <Tipografia className="font-medium">
                    {userData.celular}
                  </Tipografia>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Tipografia
                  variant="label"
                  className="text-gray-500 text-sm block mb-1"
                >
                  Correo Electrónico
                </Tipografia>
                <div className="border border-gray-300 rounded-lg p-2 lg:p-3 bg-gray-50">
                  <Tipografia className="font-medium">
                    {userData.correo}
                  </Tipografia>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Tipografia
                  variant="label"
                  className="text-gray-500 text-sm block mb-1"
                >
                  Estado
                </Tipografia>
                <div
                  className={`border rounded-lg p-2 lg:p-3 ${
                    userData.estado === "activo"
                      ? "border-green-400 bg-green-100"
                      : "border-red-300 bg-red-50"
                  }`}
                >
                  <Tipografia
                    className={`font-medium ${
                      userData.estado === "activo"
                        ? "text-gray-800"
                        : "text-red-700"
                    }`}
                  >
                    {userData.estado === "activo" ? "Activo" : "Inactivo"}
                  </Tipografia>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAlert && (
        <AlertaInhabilitar 
          onClose={handleCloseAlert} 
          onConfirm={handleConfirmStatusChange}
          alertText={alertText}
          isEnabling={userStatus !== "activo"}
        />
      )}
    </div>
  );
};

export default VerUsuario;