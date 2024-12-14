import React, { useContext, useEffect, useState } from 'react'
import PokemonCardGridSearchPokedex from '../../components/Pokedex/PokemonCardGridSearchPokedex'
import PokedexContext from '../../context/PokedexContext'
function MyList() {
  var {comparePokemon, setComparePokemon, addPokemonToList, setAddPokemonToList} = useContext(PokedexContext);

  const addPokemonToCompare = (index) => {
    // console.log(comparePokemon)
    if (comparePokemon.lastModification === '') {
      // console.log('yes')
      setComparePokemon({
        ...comparePokemon,
        firstPokemonToCompare: index,
        lastModification: 'pokemonFirst'
      });
    } else if (comparePokemon.lastModification === 'pokemonFirst') {
      // console.log('yes1')
      setComparePokemon({
        ...comparePokemon,
        secondPokemonToCompare: index,
        lastModification: 'pokemonSecond',
      });
    } else if (comparePokemon.lastModification === 'pokemonSecond') {
      // console.log('yes2')
      setComparePokemon({
        ...comparePokemon,
        firstPokemonToCompare: index,
        lastModification: 'pokemonFirst',
      });
    }
    // console.log(comparePokemon)
  }

  const [pokemonList, setPokemonList] = useState([])
  const[useEffectRun, setUseEffectRun] = useState(false)

  const removePokemonFromList = (element) => {
    setPokemonList([])
    addPokemonToList.forEach(item => {
      if (item.pokemonId !== element.pokemonId) {
        setPokemonList(prevList => [...prevList, item]);
      }
    });
  }
  
  useEffect(() => {
    console.log(pokemonList)
    if (useEffectRun === true) {
      setAddPokemonToList(pokemonList)
    }
    setUseEffectRun(true)
  },[pokemonList])

  return (
    <div className='h-full w-full max-w-full text-white uppercase'>
      <div className='max-h-[80vh] overflow-y-scroll '>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 m-16 mt-8'>
          {
            addPokemonToList.map((element, index) => (
              <PokemonCardGridSearchPokedex data={element} removePokemon={removePokemonFromList} key={index} index={element.pokemonId} addPokemonToCompare={addPokemonToCompare} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MyList
