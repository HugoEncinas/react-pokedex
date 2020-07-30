import React from "react";
import PokemonDisplay from './PokemonDisplay';

export const PokemonContainer = ({pokemon, onClickHandler}: any) => {

  return (
    <PokemonDisplay pokemon={pokemon} onClickHandler={onClickHandler}></PokemonDisplay>
  )
};
