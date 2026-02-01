import { Button } from "@/components/button";

interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
    views: number;
}

interface ResponseProps{
  posts: PostProps[];
}

export default async function PostsPage() {

  const response = await fetch ('https://dummyjson.com/posts') 
  const data: ResponseProps = await response.json();

  async function handleFetchPosts() {
    'use server'
     const response = await fetch ('https://dummyjson.com/posts')
     const data: ResponseProps = await response.json();
     console.log(data.posts)
  }

  async function handleSearchUsers( formData: FormData) {
    'use server'

   const userId = formData.get('userId');
   
   const response = await fetch (`https://dummyjson.com/posts/user/${userId}`)
   const data: ResponseProps = await response.json()

   console.log(data)
  }

    return (
      <div>
         <h1 className="text-center mt-5 mb-2 font-bold text-4xl"> 
          Página de Posts
          </h1>
        <button onClick={handleFetchPosts}> 
          Buscar Posts 
        </button>

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

        <div className="flex flex-wrap gap-4">
          {data.posts.map (post => (
            <div key={post.id} className="bg-gray-200 p-4 rounded-md w-80">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
}