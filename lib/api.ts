// lib/api.ts

// Definição do tipo (para o TypeScript te ajudar)
export type User = {
  id: number;
  name: string;
  role: string;
};

// Esta função simula o que seria um "db.query()" ou "axios.get()"
export async function getUsers(): Promise<User[]> {
  // 1. Simulamos um atraso de rede (ex: 2 segundos)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 2. Retornamos os dados mockados
  return [
    { id: 1, name: "Ana Silva", role: "Admin" },
    { id: 2, name: "Carlos Souza", role: "Editor" },
    { id: 3, name: "Beatriz Lima", role: "Viewer" },
  ];
}