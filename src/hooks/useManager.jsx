import { useContext } from 'react';
import { PokeManagerContext } from '../context/context';

export const useManager = () => {

    const { 
      PokeManagerState, 
      setModal,
      setPokemon,
      setTotalPokemons,
      setPage,
      toggleView } = useContext( PokeManagerContext );

    return {
      PokeManagerState,
      setModal,
      setPage,
      setPokemon,
      setTotalPokemons,
      toggleView
    }
}
