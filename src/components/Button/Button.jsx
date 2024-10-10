import React from "react";

const Button = ({ children, icon, onClick, className = "" }) => {
  return (
    <button
      // The button's base styles are defined here
      // We also allow additional classes to be added via the className prop
      className={`
        bg-[#2AA8FF] 
        text-white 
        font-normal 
        py-2 
        px-4 
        rounded-md 
        flex 
        items-center 
        justify-center 
        hover:bg-[#1E8FE1] 
        transition-colors 
        duration-300 
        ${className}
      `}
      onClick={onClick}
    >
      {/* If an icon is provided, render it before the text */}
      {icon && <span className="mr-2">{icon}</span>}
      {/* Render the button's text content */}
      {children}
    </button>
  );
};

export default Button;
