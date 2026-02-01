import Link from "next/link"; 

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-center font-bold mt-9 text-5xl">
            404 - Página não encontrada
        </h1>
        <p>Desculpe, a página que você procura não existe!</p>

        <Link href='/'>
            Voltar para a página inicial
        </Link>
        </div>
    )
}
