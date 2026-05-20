import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "red" | "gold" | "gray";
}

export default function Badge({ children, variant = "red" }: BadgeProps) {
  const variants = {
    red: "bg-[#e94560]/20 text-[#e94560] border border-[#e94560]/30",
    gold: "bg-[#f5a623]/20 text-[#f5a623] border border-[#f5a623]/30",
    gray: "bg-gray-500/20 text-gray-400 border border-gray-500/30"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
}
