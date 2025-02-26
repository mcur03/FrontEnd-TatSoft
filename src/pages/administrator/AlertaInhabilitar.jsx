import React from "react";
import Icono from "../../components/atoms/Iconos";
import Tipografia from "../../components/atoms/Tipografia";
import Boton from "../../components/atoms/Botones";

const AlertaInhabilitar = ({ onClose, onConfirm, alertText, isEnabling = false }) => {
  const handleConfirmar = () => {
    if (typeof onConfirm === 'function') {
      onConfirm();
    }
  };

  const mensaje = alertText || (isEnabling 
    ? "¿Confirmas la habilitación del usuario?" 
    : "¿Confirmas la inhabilitación del usuario?");
  
  const iconoColor = isEnabling ? "green" : "red";
  const iconoNombre = isEnabling ? "confirmar" : "cancelar";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white p-3 sm:p-5 rounded-xl shadow-lg text-center w-full max-w-xs sm:max-w-sm">
        <div className="flex flex-col items-center">
          <Icono name={iconoNombre} size={65} color={iconoColor} className="sm:w-16 sm:h-16" />
          <Tipografia className="mt-2 mb-4 sm:mb-5 text-sm sm:text-base">
            {mensaje}
          </Tipografia>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 justify-center w-full">
            <Boton
              label="Cancelar"
              tipo="cancelar"
              onClick={onClose}
              className="w-full sm:flex-1 text-sm sm:text-base py-2"
            />
            <Boton
              label="Confirmar"
              onClick={handleConfirmar}
              className="w-full sm:flex-1 text-sm sm:text-base py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertaInhabilitar;