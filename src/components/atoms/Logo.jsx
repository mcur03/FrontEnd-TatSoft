import React from "react";
import logo from "../../assets/logo tatsoft.jpg";

const Logo = ({ src = logo, alt = "logo-tatsoft", size = 80 }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: `${size}px`, height: `${size}px` }} 
      className="object-contain"
    />
  );
};

export default Logo;
