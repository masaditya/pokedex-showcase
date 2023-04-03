import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PokemonStateFn } from "internal/pokemon/state";
import { URLParserId } from "utils/parser";

const Home: NextPage = () => {
  const pokemonState = PokemonStateFn();

  return (
    <div
      className={styles.container}
      onScroll={pokemonState.onScroll}
      ref={pokemonState.listInnerRef}
    >
      <div>
        {pokemonState.data.map((item, key) => (
          <div key={key}>
            <Image
              width={150}
              height={150}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${URLParserId(
                item.url
              )}.png`}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
