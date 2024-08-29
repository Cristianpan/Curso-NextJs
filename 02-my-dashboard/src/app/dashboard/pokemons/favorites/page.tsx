"use client";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "../components";
import { useMemo, useState } from "react";
import { NotFavorites } from "./components/not-favorites";

export default function FavoritesPage() {
  const pokemonsState = useAppSelector((state) => state.pokemons);

  const favoritePokemons = useMemo(
    () => Object.values(pokemonsState),
    [pokemonsState]
  );

  const [pokemons] = useState(favoritePokemons);

  return (
    <>
      <h1 className="text-xl mb-5 capitalize">Tus pokemones favoritos</h1>
      {pokemons.length ? <PokemonGrid pokemons={pokemons} /> : <NotFavorites />}
    </>
  );
}
