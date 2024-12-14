import React, { useState, useContext, useEffect } from 'react'
import PokedexContext from '../../../context/PokedexContext'
import axios from 'axios'
import PokemonCardGridSearchPokedex from '../../../components/Pokedex/PokemonCardGridSearchPokedex'
function EvolutionPokemon({ data }) {
  var { comparePokemon, setComparePokemon, addPokemonToList, setAddPokemonToList } = useContext(PokedexContext);
  const [pokemonData, setPokemonData] = useState([])
  const addPokemonToListFunction = (element) => {
    const pokemonExists = addPokemonToList.some(item => item.pokemonId === element.pokemonId);

    if (!pokemonExists) {
      setAddPokemonToList([...addPokemonToList, element]);
    } else {
      console.log('Pokemon is already in the list.');
    }
  }
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
  async function PokemonData(data) {
    var PokemonData = {
      pokemonName: '',
      pokemonImage: '',
      pokemonType: [],
      pokemonId: -1
    }
    var url = `https://pokeapi.co/api/v2/pokemon/${data}`
    const res = await axios.get(url)
    res.data.types.forEach(element => {
      PokemonData.pokemonType.push(element.type.name)
    })
    PokemonData.pokemonName = res.data.forms[0].name
    PokemonData.pokemonImage = res.data.sprites.other.home.front_default
    PokemonData.pokemonId = res.data.id

    setPokemonData(prevData => [...prevData, PokemonData])
  }
  useEffect(() => {
    data.forEach(element => {
      PokemonData(element)
    });
  }, [data])
  return (
    <div className='h-full w-full max-w-full text-white uppercase'>
      <div className='max-h-[80vh] overflow-y-scroll '>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 m-16 mt-8'>
          {
            pokemonData.map((element) => (
              <PokemonCardGridSearchPokedex data={element} addPokemonToListFunction={addPokemonToListFunction} addPokemonToCompare={addPokemonToCompare} index={element.pokemonId} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default EvolutionPokemon
