'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

// Cria o contexto para gerenciar favoritos globalmente
const FavoritosContext = createContext<{
  favoritos: number[];
  addFavorito: (postId: number) => void;
  removeFavorito: (postId: number) => void;
} | undefined>(undefined);

// Provider que encapsula os favoritos
export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const addFavorito = (postId: number) => {
    if (!favoritos.includes(postId)) {
      setFavoritos([...favoritos, postId]);
    }
  };

  // Remove um post dos favoritos
  const removeFavorito = (postId: number) => {
    setFavoritos(favoritos.filter(id => id !== postId));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, addFavorito, removeFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

// Hook para usar o contexto de favoritos
export function useFavoritos() {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos deve ser usado dentro de FavoritosProvider');
  }
  return context;
}
