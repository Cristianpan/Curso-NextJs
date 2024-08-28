import { SimplePokemon } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";

export const PokemonCard = ({ id, name }: SimplePokemon) => {
  return (
    <Link
      href={`/dashboard/pokemon/${name}`}
      className="flex justify-center relative items-center aspect-square rounded-md bg-gray-100 overflow-hidden group shadow-lg"
    >
      <Image
        className="group-hover:scale-150 transition-transform duration-700"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt="pokemon image"
        width={100}
        height={100}
        priority={false}
      />
      <div className="absolute top-0 group-hover:right-0 -right-full transition-all duration-300 ease-in bg-slate-900 bg-opacity-40 w-full h-full flex justify-end items-end pb-2 pr-4">
        <h2 className="text-white text-xl font-medium">{name}</h2>
      </div>
    </Link>
  );
};
