
export type ListPokemonParamsType = {
    limit? : number,
    offset? : number
}

export type ListPokemonResponseType = {
    count : number,
    next : string,
    previous? : string
    results : PokemonType[]
}

export type PokemonType = {
    name : string,
    url : string
}