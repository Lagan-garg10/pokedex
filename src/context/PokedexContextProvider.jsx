import React, { useState } from 'react';
import PokedexContext from './PokedexContext';

export default function PokedexContextProvider({ children }) {
  const [comparePokemon, setComparePokemon] = useState({
    firstPokemonToCompare: '',
    secondPokemonToCompare: '',
    lastModification: '',
  });

  const [addPokemonToList, setAddPokemonToList] = useState([]);
  const [selectedPokedexPokemonTab, setSelectedPokedexPokemonTab] = useState('description');

  const fullData = {
    comparePokemon,
    setComparePokemon,
    addPokemonToList,
    setAddPokemonToList,
    selectedPokedexPokemonTab,
    setSelectedPokedexPokemonTab
  };

  return (
    <PokedexContext.Provider value={fullData}>
      {children}
    </PokedexContext.Provider>
  );
}
