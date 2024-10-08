import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    if (action.type === "pokemons/toggleFavorite") {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem("pokemons", JSON.stringify(pokemons));
    }

    next(action); 
  };
};
