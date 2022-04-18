import React, { useReducer } from 'react'
import { PokeManagerContext } from './context';
import { PokeManagerReducer } from './reducer';

const init = {
  showModal: false,
  pokemon: {id:'', height: '', name:'', weight: '', pic:''},
  page: 1,
  totalPokemons: 0,
  view: false
};

export const PokeManagerProvider = ({ children }) => {
  const [PokeManagerState, dispatch] = useReducer(PokeManagerReducer, init);

  const setModal = () => {
    dispatch({ type: 'SET_MODAL' })
  }

  const setPage = (page) => {
    dispatch({ type: 'SET_PAGE', payload: page })
  }

  const setPokemon = (pokemon) => {
    dispatch({ type: 'SET_POKEMON', payload: pokemon })
  }

  const setTotalPokemons = (totalPokemons) => {
    dispatch({ type: 'SET_TOTAL_POKEMONS', payload: totalPokemons })
  }

  const toggleView = () => {
    dispatch({ type: 'SET_VIEW' })
  }

  return (
    <PokeManagerContext.Provider
      value={{
        PokeManagerState,
        setPokemon,
        setModal,
        setPage,
        setTotalPokemons,
        toggleView
      }}>
      {children}
    </PokeManagerContext.Provider>
  )
}
