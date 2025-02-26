import React from "react";
import AvatarTexto from "../../components/molecules/AvatarTexto";
import CampoTextoProfile from "../../components/atoms/CamposTextoProfile";
import Tipografia from "../../components/atoms/Tipografia";
import Encabezado from "../../components/molecules/Encabezado";
import NavegacionUsuario from "../../components/organisms/NavegacionUsuario";


const Profile = ({
  nombre = "",
  apellido = "",
  celular = "",
  cc = "",
  correo = "",
  rol = "",
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative z-50">
        <Encabezado className="py-4 md:py-4"
         icono="volver" 
         ruta="/" 
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 bg-white shadow-sm">
          <div className="py-6 border-b border-gray-100 shadow-md flex items-center justify-center">
            <Tipografia size="xl" className="font-semibold text-gray-800">
              Mi cuenta
            </Tipografia>
          </div>
          <NavegacionUsuario />
        </div>
        <div className="flex-1 p-4 md:p-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-purple-700 p-5 flex flex-col items-center">
                <div className="mb-1">
                  <AvatarTexto nombre={`${nombre} ${apellido}`} size="medium" />
                </div>
                <Tipografia
                  size="2xl"
                  className="text-white font-semibold mb-1"
                >
                  {nombre} {apellido}
                </Tipografia>
                <Tipografia className="text-purple-200">{rol}</Tipografia>
              </div>
              <div className="p-4 md:p-7">
                <div className="grid md:grid-cols-2 gap-7">
                  <div>
                    <div className="p-4 rounded-lg">
                      <Tipografia className="text-sm text-gray-500 mb-4 font-medium">
                        Información Personal
                      <div className="space-y-4 mt-1">
                        <CampoTextoProfile label="Nombre" value={nombre} />
                        <CampoTextoProfile label="Apellido" value={apellido} />
                        <CampoTextoProfile label="CC" value={cc} />
                      </div>
                      </Tipografia>
                    </div>
                  </div>
                  <div>
                    <div className="p-4 rounded-lg">
                      <Tipografia className="text-sm text-gray-500 mb-4 font-medium">
                        Información de Contacto
                      <div className="space-y-4 mt-1">
                        <CampoTextoProfile label="Celular" value={celular} />
                        <CampoTextoProfile label="Correo" value={correo} />
                        <CampoTextoProfile label="Rol" value={rol} />
                      </div>
                      </Tipografia>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
