import React from "react";
import logo from "../../assets/nuevo logo.jpg";

const Logo = ({ src = logo, alt = "logo-tatsoft", size = 100, className = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`object-contain ${className}`}
    />
  );
};


export default Logo;
