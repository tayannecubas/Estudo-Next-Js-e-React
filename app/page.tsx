import Image from "next/image";
import { getUsers } from "@/lib/api"; // Importando sua simulação

// 1. O componente deve ser 'async' para buscar dados no servidor
export default async function Home() {
  
  // 2. Buscamos os dados antes de renderizar o HTML (Server-side)
  const users = await getUsers();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#003366] font-sans dark:bg-gray">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-[#003366] sm:items-start">
        
        {/* Bloco de Imagem e Título */}
        <div className="flex flex-col items-center sm:items-start w-full">
          <Image
            src="/rainbowcat.gif"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
            className="mb-8"
          />
          
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mb-10">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Página de teste
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Abaixo você verá dados trazidos diretamente do "Servidor" (simulação).
            </p>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full mb-12">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white px-5 transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#ccc] md:w-[158px]"
              href="#"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Aqui você ri
            </a>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:text-white dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="#"
            >
              Aqui não.
            </a>
          </div>
        </div>

        {/* 3. AQUI ESTÁ A LISTA DE DADOS INTEGRADA */}
        <div className="w-full mt-6">
          <h2 className="text-xl font-bold mb-4 text-[#003366] dark:text-white border-b border-zinc-200 pb-2">
            Usuários Carregados
          </h2>
          
          {/* O map percorre o array 'users' e cria um card para cada um */}
          <div className="grid gap-3">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="flex items-center justify-between p-4 rounded-lg bg-zinc-50 border border-zinc-200 dark:bg-[#002855] dark:border-[#004080]"
              >
                <div>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-100">
                    {user.name}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    ID: {user.id}
                  </p>
                </div>
                
                <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {user.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}