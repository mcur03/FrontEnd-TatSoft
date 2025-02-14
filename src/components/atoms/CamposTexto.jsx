import React from "react";

const CampoTexto = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => (
  <div className="mb-3">
    <label
      htmlFor={id}
      className="block mb-1 text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="bg-purple-50 border focus:outline-none focus:border-purple-500 border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 block w-96 p-1"
      aria-label={placeholder}
    />
  </div>
);

export default CampoTexto;
