import React, { useContext } from 'react'
import GenerationContext from '../../context/GenerationContext'
import GenerationPokemon from './GenerationPokemon'
import GenerationTypes from './GenerationTypes'
import GenerationAbility from './GenerationAbility'
export default function GenerationDescription() {
    const {selectedGenerationTab, generationId} = useContext(GenerationContext)
    const generationTabs = {
        pokemon:'pokemon',
        type:'type',
        ability:'ability'
      }
  return (
    <div>
      {selectedGenerationTab===generationTabs.pokemon&&<GenerationPokemon data={generationId}/>}
      {selectedGenerationTab===generationTabs.type&&<GenerationTypes data={generationId}/>}
      {selectedGenerationTab===generationTabs.ability&&<GenerationAbility data={generationId}/>}
    </div>
  )
}
