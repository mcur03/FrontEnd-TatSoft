import React from "react";
import UsuarioAvatar from "../atoms/AvatarUsuario";
import Tipografia from "../atoms/Tipografia";
import PaletaCromatica from "../atoms/PaletaCromatica";

const AvatarTexto = () => {
  return (
    <div className="flex items-center">
      <UsuarioAvatar />
      <PaletaCromatica>
        <Tipografia>Gisela Rivera</Tipografia>
      </PaletaCromatica>
    </div>
  );
};

export default AvatarTexto;
