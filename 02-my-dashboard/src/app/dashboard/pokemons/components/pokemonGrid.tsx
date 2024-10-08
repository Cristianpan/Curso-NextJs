import { SimplePokemon } from "@/interfaces";
import { PokemonCard } from "./pokemonCard";

interface PokemonGridProps {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
};
