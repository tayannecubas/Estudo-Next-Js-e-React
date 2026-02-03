// Importa Link do Next.js para navegação otimizada
import Link from "next/link";

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
            Buscar Posts por Usuário
          </button>
        </form> 

        {/* Container com layout flexível para exibir os posts em cards */}
        <div className="flex flex-wrap gap-4">
          {/* Mapeia cada post para um card de exibição */}
          {data.posts.map (post => (
            <div key={post.id} className="bg-gray-200 p-4 rounded-md w-80">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.body}</p>
              {/* Link para a página de detalhes do post */}
              <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}