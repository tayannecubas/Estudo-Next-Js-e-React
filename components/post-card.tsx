'use client';

import { PostProps } from '@/app/posts/page';
import { useFavoritos } from '@/context/favoritos-context';
import Link from 'next/link';

// Componente Client para exibir um card de post com sistema de favoritos
export function PostCard({ post }: { post: PostProps }) {
  // Usa o contexto de favoritos
  const { favoritos, addFavorito, removeFavorito } = useFavoritos();
  const isFavorito = favoritos.includes(post.id);

  // Alterna entre adicionar e remover favorito
  const toggleFavorito = () => {
    if (isFavorito) {
      removeFavorito(post.id);
    } else {
      addFavorito(post.id);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md w-80">
      <h2 className="font-bold">{post.title}</h2>
      <p className="mb-3">{post.body}</p>
      
      {/* Botão de favorito com indicador visual */}
      <button 
        onClick={toggleFavorito}
        className={`px-3 py-1 rounded-md mr-2 ${
          isFavorito 
            ? 'bg-red-500 text-white' 
            : 'bg-gray-400 text-white hover:bg-red-400'
        }`}
      >
        {isFavorito ? '❤️ Favoritado' : '🤍 Favoritar'}
      </button>
      
      {/* Link para a página de detalhes do post */}
      <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
        Ver detalhes
      </Link>
    </div>
  );
}
