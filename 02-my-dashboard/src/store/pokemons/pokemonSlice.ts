import { SimplePokemon } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = (): PokemonsState => {
  if (typeof localStorage === "undefined") return {};
  return JSON.parse(localStorage.getItem("pokemons") ?? "{}");
};

const initialState: PokemonsState = {
  ...getInitialState(),
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      if (state[pokemon.id]) {
        delete state[pokemon.id];
      } else {
        state[pokemon.id] = pokemon;
      }
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
