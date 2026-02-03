// Importa o tipo Metadata do Next.js para configurar SEO e metadados da página
import { Metadata } from 'next';

// Define metadados (SEO) da página como título, descrição, Open Graph e robots
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
// Revalidação estática: a página será recarregada a cada 60 segundos (ISR - Incremental Static Regeneration)
export const revalidate = 60; // 1 minuto

// Componente de servidor que renderiza a página inicial
export default function HomePage() {
  // Gera um número aleatório entre 0 e 10 no servidor
  const randomNumber = Math.random() * 10;
  return (
    <div>
      <h1>Home Teste</h1>
      <h2> Número gerado: {randomNumber}</h2>
    </div>
  );
}