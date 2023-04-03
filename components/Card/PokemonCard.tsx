import { PokemonType } from "internal/pokemon/type";
import Image from "next/image";
import { URLParserId } from "utils/parser";
import Color from "color-thief-react";

export const PokemonCard = (props: PokemonType) => {
  const { name, url } = props;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${URLParserId(
    url
  )}.png`;
  return (
    <Color src={imageUrl} format="hex" crossOrigin="*">
      {({ data, loading, error }) => {
        return (
          <div
            style={{ backgroundColor: loading || error ? "#FFFFFF" : data }}
            className="text-center py-4 rounded-lg"
          >
            <Image width={150} height={150} src={imageUrl} />
            <h3 className="text-2xl font-semibold capitalize text-gray-700 tracking-wider">
              {name}
            </h3>
          </div>
        );
      }}
    </Color>
  );
};
