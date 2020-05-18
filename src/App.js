import React from 'react';
import PokemonsList from './components/PokemonsList';
import CapturedPokemons from './components/CapturedPokemons';
import { PokemonProvider } from './PokemonContext';
import PokemonForm from './components/PokemonForm';

function App() {
  return (
    <PokemonProvider>
    <div className="main">
    <PokemonsList/>
    <CapturedPokemons/>
    </div>
    <div className = 'form-wrapper'>
      <PokemonForm/>
    </div>
    </PokemonProvider>
   
  );
}

export default App;
