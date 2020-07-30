import React from "react";
import {PokemontModal , List} from './styled'

const PokemonDetail = ({pokemon, show, onCloseHandler}:any) => {
  if(!show) {
    return null;
  }
  return (
    <PokemontModal>
      Pokemon Details
      <div>
        <button onClick={onCloseHandler}>
          Close
        </button>
        <List>
          <li>
            {pokemon.name}
          </li>
          <li>
            Num: {pokemon.num}
          </li>
          <li>
            <img src={pokemon.img} alt={pokemon.name}></img>
          </li>
          <li>
             {`Type(s): ${pokemon.type.join(', ')}`}
          </li>
          <li>
            {`Weaknesses: ${pokemon.weaknesses.join(', ')}`}
          </li>
          <li>
            Height: {pokemon.height} / Weight: {pokemon.weight}
          </li>
          <li>
            {pokemon.prev_evolution?
              `Prev evolutions: ${pokemon.prev_evolution.map((pkm:any) => {
                return pkm.name
              }).join(', ')}`
              : 'Prev evolutions: N/A'
            }
          </li>
          <li>
            {pokemon.next_evolution?
              `Next evolutions: ${pokemon.next_evolution.map((pkm:any) => {
                return pkm.name
              }).join(', ')}`
              : 'Next evolutions: N/A'
            }
          </li>
        </List>
      </div>
    </PokemontModal>
  );
};
export default PokemonDetail;
