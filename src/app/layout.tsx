import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbershop FSW",
  description: "Um gerenciador de barbearias - Barbershop FSW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`dark antialiased`}>{children}</body>
    </html>
  );
}
