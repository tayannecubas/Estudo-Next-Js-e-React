// Marca este componente como Client Component para usar hooks do React
'use client';

import { useEffect, useState } from "react";

// Componente de cliente que busca e exibe posts da API
export default function TestePage() {
    // Estado para armazenar os posts fetched da API
    const [posts, setPosts] = useState([]);

    // Hook para buscar dados da API assim que o componente monta
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    }, [])

    return (
        <div>
          <h1 className= "text-center mt-5 font-bold text-3xl">
             Página Client
          </h1>
          
          
          <div className="flex flex-wrap gap-4">
             {posts.map ((post: any) => (
            <div key={post.id} className="bg-gray-200 p-4 rounded-md w-80">
                <h2 className="font-bold">{post.title}</h2>
                <p>{post.body}</p>
            </div>
               ))}
          </div>

        </div>
    );
        
}
