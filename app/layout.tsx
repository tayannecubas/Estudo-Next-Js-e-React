import { Header } from '@/components/header';
import { FavoritosProvider } from '@/context/favoritos-context';
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Home - Aula Next JS',
  description: 'Teste de landing page para aplicação de módulo Next JS.',
  openGraph:{
    title: 'Aprendendo Next JS',
    description: 'Teste de landing page para aplicação de módulo Next JS.',
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
    }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FavoritosProvider>
          <Header />
          {children}
        </FavoritosProvider>
      </body>
    </html>
  );
}