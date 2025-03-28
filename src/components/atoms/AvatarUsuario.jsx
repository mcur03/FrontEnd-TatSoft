import React from "react";
import Avatar from '../../assets/Avatar/Woman free icons designed by Prosymbols Premium.jpeg';

const UsuarioAvatar = ({ src = Avatar, alt = "Avatar", size = 45 }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover`} 
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};

export default UsuarioAvatar;
