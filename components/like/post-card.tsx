'use client';

import { PostProps } from '@/app/posts/page';
import Link from 'next/link';

//1. useState - Estados Locais. O que é: Gerencia dados dentro de um único componente.
import { useState } from 'react';

// Componente Client para exibir um card de post com sistema de likes
export function PostCard({ post }: { post: PostProps }) {
  // Estado local para gerenciar os likes do post
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-gray-300 p-4 rounded-md w-80">
      <h2 className="font-bold">{post.title}</h2>
      <p className="mb-3">{post.body}</p>
      
      {/* Botão de like com contador */}
      <button 
        onClick={() => setLikes(likes + 1)}
        className="bg-red-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-red-600"
      >
        ❤️ {likes} likes
      </button>
      
      {/* Link para a página de detalhes do post */}
      <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
        Ver detalhes
      </Link>
    </div>
  );
}
