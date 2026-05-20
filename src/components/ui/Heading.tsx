import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  centered?: boolean;
}

export default function Heading({
  children,
  level = 1,
  className = "",
  centered = false
}: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";

  const styles = {
    1: "text-4xl md:text-6xl font-black uppercase italic tracking-tighter",
    2: "text-3xl md:text-5xl font-black uppercase italic tracking-tighter",
    3: "text-2xl md:text-3xl font-black uppercase italic",
    4: "text-xl font-bold"
  };

  return (
    <Tag className={`
      ${styles[level]}
      ${centered ? "text-center" : ""}
      text-white mb-6
      ${className}
    `}>
      {children}
    </Tag>
  );
}
