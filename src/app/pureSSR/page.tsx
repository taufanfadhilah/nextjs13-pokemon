import SSRPokemonTable from "@/app/components/SSRPokemonTable";

import { store } from "@/app/store";
import { setStartupPokemon } from "@/app/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();

  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <SSRPokemonTable />
    </main>
  );
}
