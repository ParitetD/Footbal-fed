import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import BaseLayout from "../components/BaseLayout";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"], variable: "--font-montserrat", weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Kyrgyz Football Union | Official Website",
  description: "Official information portal of the Football Federation of Kyrgyzstan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <BaseLayout>
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
