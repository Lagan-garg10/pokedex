import React, { useEffect, useState, useContext } from 'react'
import PokedexContext from '../../context/PokedexContext'
import PokemonCardGrid from '../../components/Pokedex/PokemonCardGridSearchPokedex'
import axios from 'axios'
// import Compare from './Compare'
export default function SearchPokemon() {
  const [fullData, setFullData] = useState([])
  // const [forceRender, setForceRender] = useState(false);
  async function pokemonCardData(data) {
    var PokemonData = {
      pokemonName: '',
      pokemonImage: '',
      pokemonType: [],
      pokemonId: -1
    }
    var url = data.url
    const res = await axios.get(url)
    res.data.types.forEach(element => {
      PokemonData.pokemonType.push(element.type.name)
    })
    PokemonData.pokemonName = res.data.forms[0].name
    PokemonData.pokemonImage = res.data.sprites.other.home.front_default
    PokemonData.pokemonId = res.data.id

    setFullData(prevData => [...prevData, PokemonData])
  }


  // const [pokemonAlreadyInList, setPokemonAlreadyInList] = useState(false)
  var { comparePokemon, setComparePokemon, addPokemonToList, setAddPokemonToList } = useContext(PokedexContext);

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

  const addPokemonToListFunction = (element) => {
    const pokemonExists = addPokemonToList.some(item => item.pokemonId === element.pokemonId);

    if (!pokemonExists) {
      setAddPokemonToList([...addPokemonToList, element]);
    } else {
      console.log('Pokemon is already in the list.');
    }
  }


  useEffect(() => {
    async function FetchAllData() {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000')
      // await setFullData(res.data.results)
      const data = res.data.results
      await data.forEach(element => {
        pokemonCardData(element)
      });
    }
    FetchAllData()
  }, [])
  return (
    <>
        <div className='h-full w-full max-w-full text-white uppercase'>
        <input type="text" className='w-full h-[9%] pl-4 text-[1.3rem] bg-custom1 outline-none border-none text-white shadow-custom' placeholder='Search Pokemon' />
        <div className='max-h-[80vh] overflow-y-scroll '>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 m-16 mt-8'>
            {
              fullData.map((element, index) => (
                <PokemonCardGrid data={element} key={index} index={element.pokemonId} addPokemonToCompare={addPokemonToCompare} addPokemonToListFunction={addPokemonToListFunction} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )

}