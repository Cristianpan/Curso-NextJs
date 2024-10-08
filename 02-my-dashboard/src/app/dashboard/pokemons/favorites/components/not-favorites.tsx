import { TbHeart } from "react-icons/tb";

export const NotFavorites = () => {
  return (
    <div className="w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
      <TbHeart size={100} color="red" />

      <div className="flex flex-col items-center justify-center">
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          There are no favorite pokemons
        </p>
      </div>
    </div>
  );
};
