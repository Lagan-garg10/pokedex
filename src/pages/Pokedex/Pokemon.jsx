import React, { useContext, useEffect, useState } from 'react';
import DescriptionPokemon from './pokedexPokemonDetailPages/DescriptionPokemon';
import CapableMovesPokemon from './pokedexPokemonDetailPages/CapableMovesPokemon';
import EvolutionPokemon from './pokedexPokemonDetailPages/EvolutionPokemon';
import LocationPokemon from './pokedexPokemonDetailPages/LocationPokemon';
import PokedexContext from '../../context/PokedexContext';
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Pokemon() {
  var pokemon_id = useParams()
  pokemon_id = pokemon_id.id
  const { selectedPokedexPokemonTab } = useContext(PokedexContext);

  const pokemonTabs = {
    description: "description",
    evolution: "evolution",
    locations: "locations",
    moves: "moves",
  };

  const [evolutionData, setEvolutionData] = useState([])

  async function getPokemonEvolutionData() {
    var evolution_chain = []
    var res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_id}/`)
    var evolution_chain_link = res.data.evolution_chain.url
    var res1 = await axios.get(evolution_chain_link)
    var specie_name = res1.data.chain.species.name
    evolution_chain.push(specie_name)
    function getSpeciesName(data) {
      if (data.length !== 0) {
        data.forEach(element => {
          evolution_chain.push(element.species.name)
          // console.log('yes')
          if (element.evolves_to.length !== 0) {
            // console.log('yes1')
            getSpeciesName(element.evolves_to)
          }
        });
      }
    }
    getSpeciesName(res1.data.chain.evolves_to)
    setEvolutionData(evolution_chain)
  }

  useEffect(() => {
    getPokemonEvolutionData()
  },[pokemon_id])

  return (
    <div>
      {selectedPokedexPokemonTab === pokemonTabs.description && <DescriptionPokemon data={pokemon_id}/>}
      {selectedPokedexPokemonTab === pokemonTabs.evolution && <EvolutionPokemon data={evolutionData}/>}
      {selectedPokedexPokemonTab === pokemonTabs.moves && <CapableMovesPokemon data={pokemon_id}/>}
      {selectedPokedexPokemonTab === pokemonTabs.locations && <LocationPokemon data={pokemon_id}/>}
    </div>
  );
}

export default Pokemon;
