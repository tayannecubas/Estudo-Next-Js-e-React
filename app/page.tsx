import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Aulão Next JS',
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
export const revalidate = 60; // 1 minuto

export default function HomePage() {

  const randomNumber = Math.random() * 10;
  return (
    <div>
      <h1>Home Teste</h1>
      <h2> Número gerado: {randomNumber}</h2>
    </div>
  );
}