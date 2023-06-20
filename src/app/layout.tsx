// Arquivo que configura o layout geral

// CSS
import "./globals.css";

// Components
import Header from "@/components/header/Header";
import { Providers } from "@/store/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
