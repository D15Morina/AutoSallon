import type { Metadata } from "next";
import "./globals.css";
import LanguageProvider from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Auto Saloni Vetura Ime",
  description: "Çdo rrugëtim fillon me veturën e duhur.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sq"><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
