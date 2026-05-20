import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  noPadding?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  noPadding = false
}: CardProps) {
  return (
    <div className={`
      bg-[#16213e] border border-white/5 rounded-2xl overflow-hidden
      ${hover ? "hover:border-[#e94560]/50 transition-all duration-300 transform hover:-translate-y-1" : ""}
      ${noPadding ? "" : "p-6"}
      ${className}
    `}>
      {children}
    </div>
  );
}
