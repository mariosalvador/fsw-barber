import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./_provider/auth";

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
      <body className={`dark antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
