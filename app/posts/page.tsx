// Importa o componente PostCard para exibir cada post em um card estilizado
import { PostCard } from "@/components/post-card";
// Importa o componente de filtros com useReducer
import { FiltrosPosts } from "@/components/filtros-posts";

// Interface para tipagem de um post individual
export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
    views: number;
}

// Interface para tipagem da resposta da API
interface ResponseProps{
  posts: PostProps[];
}

// Revalidação estática: regenera a página a cada 60 segundos (ISR)
export const revalidate = 60; // 1 minuto

// Componente de servidor assíncrono que busca posts da API
export default async function PostsPage() {
  // Fetch de posts da API externa com await
  const response = await fetch ('https://dummyjson.com/posts') 
  const data: ResponseProps = await response.json();

  // Server Action: função que roda no servidor quando chamada do cliente
  async function handleFetchPosts() {
    'use server' // Diretiva que marca esta função para executar no servidor
     const response = await fetch ('https://dummyjson.com/posts', {
      cache: 'force-cache', // Usa cache força
      next: { 
        revalidate: 60 // Revalida a cada 60 segundos
      }
     })
     const data: ResponseProps = await response.json();
     console.log(data.posts) // Log no servidor
  }

  // Server Action: busca posts por ID de usuário
  async function handleSearchUsers( formData: FormData) {
    'use server' // Executa no servidor

   // Extrai o ID do usuário do formulário
   const userId = formData.get('userId');

   // Busca posts do usuário específico na API
   const response = await fetch (`https://dummyjson.com/posts/user/${userId}`)
   const data: ResponseProps = await response.json()

   console.log(data) // Log no servidor
  }

    return (
      <div>
         <h1 className="text-center mt-5 mb-2 font-bold text-4xl"> 
          Página de Posts
          </h1>

        {/* Componente de filtros com useReducer */}
        <div className="max-w-md mx-auto mb-6">
          <FiltrosPosts />
        </div>

        {/* Botão para buscar todos os posts */}
        <button onClick={handleFetchPosts}> 
          Buscar Posts 
        </button>

        {/* Formulário para buscar posts de um usuário específico */}
        <form 
           className="flex gap-2 mt-4 mb-6"
           action={handleSearchUsers}
           >
          <input
           type="text"
           placeholder="ID do usuário"
           className="border border-gray-300 rounded-md px-4 py-2 mr-2"
           name="userId"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Buscar Posts 
          </button>
        </form> 

        {/* Container com layout flexível para exibir os posts em cards */}
        <div className="flex flex-wrap gap-4">
          {/* Mapeia cada post para um card de exibição com likes */}
          {data.posts.map (post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
}