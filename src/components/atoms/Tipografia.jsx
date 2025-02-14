import React from "react";

const Tipografia = ({ variant = "span", children, className = "", size = "base" }) => {
  const validTags = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "strong", "em"];
  const Tag = validTags.includes(variant) ? variant : "span";  

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  return (
    <Tag className={`font-literata ${sizeClasses[size] || ""} ${className}`}>
      {children}
    </Tag>
  );
};

export default Tipografia;

