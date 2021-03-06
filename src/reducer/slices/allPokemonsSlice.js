import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const AllPokemonsSlice = createSlice({
  name: 'allPokemons',
  initialState: {
    allPokemonsList: undefined,
    isLoading: false,
    pokemonsPerView: 15,
    viewType: 'table',
  },
  reducers: {
    setAllPokemonsList: (state, action) => {
      state.allPokemonsList = action.payload;
    },

    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    toggleViewType: (state, action) => {
      state.viewType = action.payload;
    },

    togglePokemonsPerView: (state, action) => {
      state.pokemonsPerView = action.payload;
    },
  },
});

export const {
  setAllPokemonsList,
  toggleIsLoading,
  togglePokemonsPerView,
  toggleViewType,
} = AllPokemonsSlice.actions;
export default AllPokemonsSlice.reducer;

//

export const fetchPokemons = () => dispatch => {
  toggleIsLoading(true);
  axios
    .get('https://pokeapi.co/api/v2/generation/1/')
    .then(response => {
      dispatch(setAllPokemonsList(response.data.pokemon_species));
      toggleIsLoading(false);
    })
    .catch(error => console.error(error));
};
