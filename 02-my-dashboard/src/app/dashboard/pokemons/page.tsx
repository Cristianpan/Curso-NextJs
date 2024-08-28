import { PokemonsResponse, SimplePokemon } from "@/app/interfaces";
import { PokemonGrid } from "./components/pokemonGrid";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await response.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons();
  return (
    <>
      <h1 className="text-xl mb-5">Pokemones</h1>
      <PokemonGrid pokemons={pokemons} />
    </>
  );
}
