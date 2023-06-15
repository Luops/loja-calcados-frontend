// Arquivo que configura o layout geral

// CSS
import "./globals.css";

// Components
import Header from "@/components/header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
