import PaginationStateFn, {
  PaginationStateType,
} from "internal/base/state/pagination";
import { ListPokemonResponseType, PokemonType } from "../type";
import { ListPokemon } from "../http";
import { MutableRefObject, useCallback, useRef } from "react";

type PokemonStateType = {
  listInnerRef: MutableRefObject<HTMLDivElement | null>;
  onScroll: () => void;
  onScrollEnd: () => void;
};

export const PokemonStateFn = (): PokemonStateType &
  PaginationStateType<PokemonType> => {
  const pokemonPaginationState = PaginationStateFn<
    ListPokemonResponseType,
    PokemonType
  >({
    apiGet: ListPokemon,
    defaultParams: {
      limit: 20,
      offset: 0,
    },
    hideQuery: true,
  });

  const listInnerRef = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        onScrollEnd();
      }
    }
  };

  const onScrollEnd = useCallback(() => {
    pokemonPaginationState.onChangeParams(
      {
        limit: pokemonPaginationState.params?.limit + 20,
      },
      false
    );
  }, [pokemonPaginationState.params?.limit]);

  return { ...pokemonPaginationState, listInnerRef, onScroll, onScrollEnd };
};
