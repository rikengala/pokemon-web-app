import React from 'react';
import PokemonsList from './components/PokemonsList';
import CapturedPokemons from './components/CapturedPokemons';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonsList></PokemonsList>
      <CapturedPokemons></CapturedPokemons>
    </div>
  );
}

export default App;
