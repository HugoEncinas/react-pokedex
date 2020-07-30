import React, { useEffect, useState } from "react";
import { usePokedex } from "../../hooks/usePokedex";
import PokdexDisplay from './PokdexDisplay';

export const PokedexContainer = () => {
  const {pokemonData}  = usePokedex()!;
  const [ filteredPokemonData, setFilteredPokemonData] = useState(pokemonData);
  const [showModal, setShowModal] = useState(false)
  const [pokemonIndividual, setPokemonIndividual] = useState({})
  const [searchWord, setSearchWord] = useState('')
  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')
  const [weakness, setWeakness] = useState('')

  useEffect(() => {
    setFilteredPokemonData(pokemonData)
  }, [pokemonData]);

  useEffect(() => {
    let filteredPokedexArray = pokemonData;
    if (searchWord) {
      filteredPokedexArray = pokemonData.filter((pkm:any) => (
        (pkm.name.toLowerCase().includes(searchWord))
      ));
    }

    if(type1 && type2) {
      filteredPokedexArray = filteredPokedexArray.filter((pkm:any) => (
        (pkm.type?.includes(type1) && pkm.type?.includes(type2))
      ));
    } else if (type1 && !type2) {
      filteredPokedexArray = filteredPokedexArray.filter((pkm:any) => (
        (pkm.type?.includes(type1))
      ));
    } else if (!type1 && type2) {
      filteredPokedexArray = filteredPokedexArray.filter((pkm:any) => (
        (pkm.type?.includes(type2))
      ));
    }

    if (weakness) {
      filteredPokedexArray = filteredPokedexArray.filter((pkm:any) => (
        (pkm.weaknesses?.includes(weakness))
      ));
    }

    setFilteredPokemonData(filteredPokedexArray);
  }, [type1, type2, searchWord, weakness, pokemonData]);


  const searchHandler = (event:any) => {
    if (event.charCode === 13) {
      const searchWordfromEvent = event.target.value.toLowerCase();
      setSearchWord(searchWordfromEvent);
      event.target.value = '';
    }
  };

  const typeHandler = (event:any, typeNumber:number) => {
    const type = event.target.value;
    if (typeNumber === 1) {
      setType1(capitalize(type))
    } else if (typeNumber === 2) {
      setType2(capitalize(type))
    } else if(typeNumber === 3) {
      setWeakness(capitalize(type));
    }
  }

  const capitalize = (s: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const onClickHandler = (pokemon: any) => {
    setPokemonIndividual(pokemon)
    setShowModal(true)
    window.scrollTo(0, 0);
  }

  const onCloseHandler = () => {
    setShowModal(false)
  }

  return (
    <PokdexDisplay pokemonData={filteredPokemonData} pokemonIndividual={pokemonIndividual} onCloseHandler={onCloseHandler} searchHandler={searchHandler} typeHandler={typeHandler} onClickHandler={onClickHandler} showModal={showModal}></PokdexDisplay>
  )
};
