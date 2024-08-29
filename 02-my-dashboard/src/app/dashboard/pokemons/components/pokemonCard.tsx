"use client";
import { SimplePokemon } from "@/interfaces";
import { HiHeart } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonSlice";

export const PokemonCard = ({ id, name }: SimplePokemon) => {
  const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
  const dispatch = useAppDispatch();
  const setIsFavorite = () => {
    dispatch(toggleFavorite({ id, name }));
  };
  return (
    <div className="flex justify-center relative items-center aspect-square rounded-md bg-gray-50 overflow-hidden group shadow-lg">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt="pokemon image"
        width={100}
        height={100}
      />
      <div
        className={`absolute top-0 ${
          isFavorite
            ? "right-0 bg-red-200"
            : "-right-full group-hover:right-0 bg-gray-500"
        }  transition-all duration-300 ease-in bg-opacity-50 w-full h-full flex flex-col justify-between items-end p-4`}
      >
        <button onClick={setIsFavorite}>
          <HiHeart color={isFavorite ? "red" : "white"} size={30} />
        </button>
        <Link
          href={`/dashboard/pokemon/${name}`}
          className="text-blacktext-xl font-medium capitalize hover:underline"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};
