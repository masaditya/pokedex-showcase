import { PokemonType } from "internal/pokemon/type";
import Image from "next/image";
import { URLParserId } from "utils/parser";

export const PokemonCard = (props: PokemonType) => {
  const { name, url } = props;
  return (
    <div className="bg-green-100 text-center py-4 rounded-lg">
      <Image
        width={150}
        height={150}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${URLParserId(
          url
        )}.png`}
      />
      <h3 className="text-2xl font-semibold capitalize text-gray-700 tracking-wider">
        {name}
      </h3>
    </div>
  );
};
