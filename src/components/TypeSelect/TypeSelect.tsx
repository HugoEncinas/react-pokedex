import React from 'react';

const TypeSelect = ({typeHandler}:any) => {

  const types = ["", "normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];

  return (
    <div className='type-container'>
      <label htmlFor="type1">Type1 </label>
      <select id="type1" name="type1" onChange={(event) => typeHandler(event, 1)}>
        {
          types.map((type, index) => (
            <option value={type} key={index}>{type}</option>
          ))
        }
      </select>
      <label htmlFor="type2">Type2 </label>
      <select id="type2" name="type2" onChange={(event) => typeHandler(event, 2)}>
        {
          types.map((type, index) => (
            <option value={type} key={index}>{type}</option>
          ))
        }
      </select>
      <br/>
      <label htmlFor="weakness">Weakness </label>
      <select id="weakness" name="weakness" onChange={(event) => typeHandler(event, 3)}>
        {
          types.map((type, index) => (
            <option value={type} key={index}>{type}</option>
          ))
        }
      </select>
    </div>
  );
};
export default TypeSelect;
