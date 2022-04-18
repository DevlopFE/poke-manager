import '@testing-library/jest-dom/extend-expect'
import { PokeManagerReducer } from '../../context/reducer';

describe('PokeManagerReducer />', () => {

  const initialValue =  {
    showModal: false,
    pokemon: {id:'', height: '', name:'', weight: '', pic:''},
    page: 1,
    totalPokemons: 0,
    view: false
  };

  test('Default value is on state', () => {
    const state = PokeManagerReducer(initialValue, {type: '@@INIT'});
    expect(state).toEqual(initialValue)
  })

  test('Should set a pokemon', () => {
    const mockemon = {id:'1', height: '10', name:'picachu', weight: '10'}
    const action =  {
      type: 'SET_POKEMON',
      payload: mockemon
    };
    const state = PokeManagerReducer(initialValue, action);
    expect(state.pokemon.name).toEqual(mockemon.name)
  })
})
