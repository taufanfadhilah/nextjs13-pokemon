"use client";

import { useRef } from "react";
import { store } from "@/app/store";
import { setStartupPokemon } from "@/app/store/searchSlice";
import { Pokemon } from "@/app/types";

function Preloader({ pokemons }: { pokemons: Pokemon[] }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupPokemon(pokemons));
    loaded.current = true;
  }

  return null;
}

export default Preloader;
