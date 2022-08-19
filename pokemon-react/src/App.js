import React, { useState } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';

function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])

  return (
    <PokemonList pokemon={pokemon} />
  );
}

export default App;
