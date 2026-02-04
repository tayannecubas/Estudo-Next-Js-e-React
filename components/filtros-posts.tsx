'use client';

import { useReducer } from 'react';

// Define o tipo do estado
interface FiltrosState {
  search: string;
  categoria: string;
  ordem: string;
}

// Define os tipos de ações
type FiltrosAction =
  | { type: 'SET_SEARCH'; value: string }
  | { type: 'SET_CATEGORIA'; value: string }
  | { type: 'SET_ORDEM'; value: string }
  | { type: 'LIMPAR' };

// Reducer: função que gerencia o estado com base nas ações
function filtrosReducer(state: FiltrosState, action: FiltrosAction): FiltrosState {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.value };
    case 'SET_CATEGORIA':
      return { ...state, categoria: action.value };
    case 'SET_ORDEM':
      return { ...state, ordem: action.value };
    case 'LIMPAR':
      return { search: '', categoria: '', ordem: 'recente' };
    default:
      return state;
  }
}

// Componente que usa useReducer para gerenciar filtros
export function FiltrosPosts() {
  // useReducer: estado inicial + reducer
  const [filtros, dispatch] = useReducer(filtrosReducer, {
    search: '',
    categoria: '',
    ordem: 'recente',
  });

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filtros de Posts</h2>

      {/* Input de busca */}
      <div className="mb-3">
        <input
          type="text"
          value={filtros.search}
          onChange={(e) => dispatch({ type: 'SET_SEARCH', value: e.target.value })}
          placeholder="Buscar posts..."
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      {/* Select de categoria */}
      <div className="mb-3">
        <select
          value={filtros.categoria}
          onChange={(e) => dispatch({ type: 'SET_CATEGORIA', value: e.target.value })}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Todas as categorias</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="programacao">Programação</option>
          <option value="design">Design</option>
        </select>
      </div>

      {/* Select de ordenação */}
      <div className="mb-3">
        <select
          value={filtros.ordem}
          onChange={(e) => dispatch({ type: 'SET_ORDEM', value: e.target.value })}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="recente">Mais recentes</option>
          <option value="antigo">Mais antigos</option>
          <option value="popular">Mais populares</option>
        </select>
      </div>

      {/* Botão limpar */}
      <button
        onClick={() => dispatch({ type: 'LIMPAR' })}
        className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Limpar filtros
      </button>

      {/* Mostra os filtros ativos */}
      <div className="mt-4 p-3 bg-white rounded-md">
        <h3 className="font-bold mb-2">Filtros ativos:</h3>
        <p><strong>Busca:</strong> {filtros.search || 'Nenhuma'}</p>
        <p><strong>Categoria:</strong> {filtros.categoria || 'Todas'}</p>
        <p><strong>Ordem:</strong> {filtros.ordem}</p>
      </div>
    </div>
  );
}
