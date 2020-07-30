import React from "react";

interface IPokemonDataType {
  pokemonData: any,
  setData: (value: any) => void;
}

const PokemonDataContext = React.createContext<IPokemonDataType| undefined>(undefined)
export default PokemonDataContext;