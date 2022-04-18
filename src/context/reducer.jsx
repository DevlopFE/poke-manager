
export const PokeManagerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODAL':
      return { ...state, showModal: !state.showModal }
    case 'SET_POKEMON':
      return { ...state, pokemon: action.payload }
    case 'SET_PAGE':
      return { ...state, page: action.payload }
    case 'SET_TOTAL_POKEMONS':
      return { ...state, totalPokemons: action.payload }
      case 'SET_VIEW':
      return { ...state, view: !state.view }
    default:
      return state;
  }
}
