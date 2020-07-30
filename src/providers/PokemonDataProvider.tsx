import React, { ReactNode, useState, useEffect } from 'react';
import PokemonDataContext from '../contexts';
import fetchPokedexData from '../api'

type Props = {
  children: ReactNode;
};

const PokemonDataProvider = ({ children }: Props) => {
  const [data, setData] = useState(
    [{}]
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    const data = await fetchPokedexData(url)
    setData(data.pokemon);
  };

  return (
    <PokemonDataContext.Provider value={{pokemonData: data, setData}}>
      {children}
    </PokemonDataContext.Provider>
  );
};

export default PokemonDataProvider;
