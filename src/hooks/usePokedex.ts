
import React from "react";
import  PokemonDataContext from '../contexts';

export const usePokedex = () =>
  React.useContext(PokemonDataContext);