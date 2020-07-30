import React from 'react';
import Pokemon from '../Pokemon';
import Search from '../Search';
import TypeSelect from '../TypeSelect';
import PokemonDetail from '../PokemonDetail';

const PokdexDisplay = ({pokemonData, pokemonIndividual, showModal, onCloseHandler, searchHandler, typeHandler, onClickHandler}:any) => (
  <div>
    <h1>
      Pokedex
    </h1>
    <Search searchHandler={searchHandler}></Search>
    <TypeSelect typeHandler={typeHandler}></TypeSelect>
    {pokemonData.map((pokemon:any) => {
      return (
        <Pokemon
          pokemon={pokemon}
          key={`${pokemon.id}${pokemon.name}`}
          onClickHandler={onClickHandler}
        ></Pokemon>
      );
    })}
    <PokemonDetail pokemon={pokemonIndividual} show={showModal} onCloseHandler={onCloseHandler}></PokemonDetail>
  </div>
);

export default PokdexDisplay;
