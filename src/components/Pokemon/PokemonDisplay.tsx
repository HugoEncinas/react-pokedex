import React from 'react';
import {PokemontItem} from './styled';

const PokemonDisplay = ({pokemon, onClickHandler}:any) => (
  <PokemontItem onClick={() => onClickHandler(pokemon)}>
    <label>{pokemon.num} </label>
    {pokemon.name}
  </PokemontItem>
);

export default PokemonDisplay;
