import { configureStore, Middleware } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import pokemons from "./pokemons/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { localStorageMiddleware } from "./middlewares/localstorageMiddleware";

export const store = configureStore({
  reducer: {
    counter,
    pokemons,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
