import type { NextPage } from "next";
import { PokemonStateFn } from "internal/pokemon/state";
import { PokemonCard } from "components/Card/PokemonCard";
import { Spinner } from "components/Common/Spinner";

const Home: NextPage = () => {
  const pokemonState = PokemonStateFn();

  return (
    <div
      className="p-4 bg-black overflow-auto h-screen"
      onScroll={pokemonState.onScroll}
      ref={pokemonState.listInnerRef}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonState.data.map((item, key) => (
          <PokemonCard key={key} name={item.name} url={item.url} />
        ))}
      </div>
      {pokemonState.loading && (
        <div className="absolute bottom-6 left-1/2 right-1/2 m-auto">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Home;
