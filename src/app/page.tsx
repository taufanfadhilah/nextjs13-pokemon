import SearchInput from "@/app/components/SearchInput";
import Providers from "@/app/components/Provider";
import { store } from "@/app/store";
import { setStartupPokemon } from "@/app/store/searchSlice";
import Preloader from "@/app/components/Preloader";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();

  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <Preloader pokemons={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </main>
  );
}
