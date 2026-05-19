import type { Metadata } from "next";
// import { Children } from "react";
import BaseLayout from "../components/BaseLayout";

export const metadata: Metadata = {
  title: "Федерация Фубола Кыргызстана",
  description: "Официальный сайт Федерации Фубола Кыргызстана",
};

export default function RootLayout({ children }: { children }) {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  );
}