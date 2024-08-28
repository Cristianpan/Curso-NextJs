import { PokemonGrid } from "../components";

export default function FavoritesPage() {
  return (
    <>
      <>
        <h1 className="text-xl mb-5 capitalize">Tus pokemones favoritos</h1>
        <PokemonGrid pokemons={[]} />
      </>
    </>
  );
}
