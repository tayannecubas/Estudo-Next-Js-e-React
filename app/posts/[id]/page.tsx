import { Suspense } from "react";
import { PostProps } from "../page";
import { PostInfo } from "./components/post";

export default async function DetailPost({
    params
}: {
    params: Promise<{id: string}>
}) {

    const{id} = await params;


    return(
       <div>
        <h1 className="text-2xl font-bold text-center">Detalhes do post: {id}</h1>
        <Suspense fallback={<h1>Carregando detalhes do post...</h1>}>
         <PostInfo id={id} />
        </Suspense>
       </div> 
    )
}
