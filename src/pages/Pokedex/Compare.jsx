import React, {useContext} from 'react'
import PokedexCompareContainer from '../../components/Pokedex/PokedexCompareContainer'
import PokedexContext from '../../context/PokedexContext'
// import PokemonCompareContextProvider from '../context/PokemonCompareContextProvider'
function Compare() {
  var {comparePokemon} = useContext(PokedexContext)
  return (
    <div className='grid grid-cols-[49%_49%] h-full w-full gap-4 p-4'>
      <PokedexCompareContainer value={'1'} data={comparePokemon.firstPokemonToCompare}/>
      <PokedexCompareContainer value={'2'} data={comparePokemon.secondPokemonToCompare}/>
    </div>
  )
}

export default Compare
