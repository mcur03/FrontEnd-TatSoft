import React from "react";
import Boton from "../atoms/Botones";
import Icono from "../atoms/Iconos";
import Tipografia from "../atoms/Tipografia"

const Alerta = ({ tipo, mensaje, onAceptar, onCancelar }) => {
  const estilos = {
    informacion: {
      icono: "confirmar",
      color: "text-black-700",
      size: 60,
    },
    confirmacion: {
      icono: "confirmar",
      color: "text-black-700",
      size: 70,
    },
    eliminacion: {
      icono: "eliminarAlert",
      color: "text-black-700",
      size: 70,
    },
  };

  const estiloActual = estilos[tipo] || estilos.informacion;

  return (
    <Tipografia>
    <div
      className={`p-8 m-4 rounded-lg border w-80 mx-auto text-center ${estiloActual.color}`}
    >
      <div className="flex justify-center mb-4">
        <Icono
          name={estiloActual.icono}
          size={estiloActual.size}
          className="text-purple-500"
        />
      </div>
      <p className="text-sm sm:text-base font-medium">{mensaje}</p>
      <div className="mt-4 flex justify-center ">
        {onCancelar && (
          <Boton
            label="Cancelar"
            tipo="primario"
            onClick={onCancelar}
            />
        )}
        {onAceptar && (
          <Boton
            label="Aceptar"
            tipo="primario"
            onClick={onAceptar}
            
          />
        )}
      </div>
    </div>
    </Tipografia>
  );
};

export default Alerta;
