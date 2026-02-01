import {Metadata} from 'next';

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

export default function HomePage() {
  return (
    <main>
      <h1>Home Teste</h1>
      <p>Teste de landing page para aplicação de módulo Next JS.</p>
    </main>
  );
}