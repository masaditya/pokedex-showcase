import { AxiosResponse } from "axios";
import { HTTPClientNonAuth } from "internal/base/http";
import { ListPokemonParamsType } from "../type";

export const ListPokemon = (params? : ListPokemonParamsType): Promise<AxiosResponse> => {
    return HTTPClientNonAuth().get('/pokemon', {params});
  };
  