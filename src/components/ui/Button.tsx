import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-lg cursor-pointer";

  const variants = {
    primary: "bg-[#e94560] text-white hover:bg-[#ff4d6d] shadow-lg hover:shadow-[#e94560]/40",
    secondary: "bg-[#f5a623] text-white hover:bg-[#ffb347] shadow-lg hover:shadow-[#f5a623]/40",
    outline: "border-2 border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white",
    ghost: "text-gray-400 hover:text-white hover:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
