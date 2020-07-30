import React from 'react';
import './App.css';
import PokemonDataProvider from './providers'
import Pokedex from './components/Pokedex'

function App() {
  return (
    <PokemonDataProvider>
      <div className="App">
        <Pokedex></Pokedex>
      </div>
    </PokemonDataProvider>
    
  );
}

export default App;
