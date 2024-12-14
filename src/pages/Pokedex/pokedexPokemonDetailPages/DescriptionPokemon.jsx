import React from 'react'
import PokemonInfoDescriptionPokedex from '../../../components/Pokedex/PokemonInfoDescriptionPokedex'
import PokemonDescriptionImageComponentPokedex from '../../../components/Pokedex/PokemonDescriptionImageComponentPokedex'
function DescriptionPokemon({data}) {
  return (
    <>
      <PokemonInfoDescriptionPokedex data={data}/>
      <PokemonDescriptionImageComponentPokedex data={data}/>
    </>
  )
}

export default DescriptionPokemon
