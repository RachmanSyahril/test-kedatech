import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "iconRight";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const base = "px-4 py-2 rounded-xl font-semibold transition";
  const styles = {
    default: "bg-cyan-600 text-white hover:bg-cyan-700",
    outline:
      "border-2 border-cyan-500 text-cyan-500 rounded-lg font-bold hover:bg-cyan-50 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer",
    iconRight:
      "group flex items-center bg-cyan-400 text-white rounded-lg font-bold hover:bg-cyan-200 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
