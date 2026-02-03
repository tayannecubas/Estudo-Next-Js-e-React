// Importa Suspense para mostrar fallback enquanto carrega o componente
import { Suspense } from "react";
// Importa tipos e componentes necessários
import { PostInfo } from "./components/post";

// Componente de servidor assíncrono para página de detalhes de um post
// Os parâmetros dinâmicos vêm da rota [id]
export default async function DetailPost({
    params
}: {
    params: Promise<{id: string}> // O id é um Promise que precisa ser awaited
}) {
    // Extrai o id dos parâmetros da URL
    const{id} = await params;


    return(
       <div>
        <h1 className="text-2xl font-bold text-center">Detalhes do post: {id}</h1>
        {/* Suspense mostra um fallback (carregando) enquanto o componente assíncrono carrega */}
        <Suspense fallback={<h1>Carregando detalhes do post...</h1>}>
         {/* Componente assíncrono que busca os dados do post */}
         <PostInfo id={id} />
        </Suspense>
       </div> 
    )
}
