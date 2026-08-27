import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], display: "swap", variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Fundamentos de Bases de Datos",
  description: "Contenido, evaluación, proyecto, materiales y notas del curso de bases de datos.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d2135" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1420" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
