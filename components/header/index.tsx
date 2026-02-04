import Link from 'next/link';

export function Header() {
    return (
        <header className="flex px-5 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white "> 
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 w-full mx-auto max-w-7xl">
                <div className="text-xl font-bold"> Estudo de Next.js </div>
                <nav>
                    <ul className="flex items-center justify-center gap-6 p-3">
                        <li>
                            <Link href="/">
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts">
                            Posts
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard">
                            Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/lista">
                            Minha lista
                            </Link>
                        </li>
                        <li>
                            <Link href="/contatos">
                            Contatos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}