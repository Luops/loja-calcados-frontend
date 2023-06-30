"use client";

// Arquivo que configura o layout geral
import { usePathname } from "next/navigation";

// CSS
import "./globals.css";

// Components
import Header from "@/components/header/Header";
import { Providers } from "@/store/provider";
import { checkRoute } from "@/helpers/checkRouteHelper";
import { PrivateRoute } from "@/components/PrivateRoute";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublic = checkRoute(pathname);
  console.log(isPublic);
  return (
    <html lang="pt-br">
      <head />
      <body>
        <Providers>
          <Header />
          {isPublic && children}
          {!isPublic && (
            <PrivateRoute>
              {children}
            </PrivateRoute>
          )}
        </Providers>
      </body>
    </html>
  );
}
