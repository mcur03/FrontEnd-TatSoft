import React from "react";

const CampoTexto = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
}) => (
  <div className="mb-3 w-full max-w-xs sm:max-w-sm md:max-w-md">
    {label && (
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
    )}
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`bg-purple-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-purple-500 focus:ring-purple-500 block w-full p-1 ${className}`}
      aria-label={placeholder}
    />
  </div>
);


export default CampoTexto;