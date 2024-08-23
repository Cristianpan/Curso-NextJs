import { PokemonsResponse, SimplePokemon } from "@/app/interfaces";
import Image from "next/image";
import { PokemonCard } from "./components";

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
    <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
      {
        pokemons.map((pokemon)=> <PokemonCard key={pokemon.id} {...pokemon} /> )
      }
      
    </div>
  );
}
