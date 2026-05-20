import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({
  children,
  className = "",
  dark = false
}: SectionProps) {
  return (
    <section className={`
      py-20 md:py-32
      ${dark ? "bg-[#0f0f1a]" : "bg-[#1a1a2e]"}
      ${className}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
