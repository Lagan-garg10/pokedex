import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonTypes from './Pokedex/PokemonTypes'
export default function FamousPokemon({data}) {
    const [pokemonName, setPokemonName] = useState('')
    const [pokemonImage, setPokemonImage] = useState('')
    const [pokemonType, setPokemonType] = useState([])
    async function getData(){
        var types = []
        var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`)
        setPokemonName(res.data.forms[0].name)
        setPokemonImage(res.data.sprites.other.home.front_default)
        res.data.types.forEach(element => {
            types.push(element.type.name)
        })
        setPokemonType(types)
    }
    useEffect(()=>{
        getData()
    },[data])
  return (
    <div className='w-[250px] flex flex-col justify-center items-center bg-custom1 p-4 rounded-2xl relative shadow-custom text-white'>
      <h3 className='text-center cursor-pointer mt-4'>{pokemonName}</h3>
      <img className='h-40 cursor-pointer' src={pokemonImage} alt="" />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-4 w-full'>
        {pokemonType.map((type, index) => (
          <div className='flex flex-col justify-center items-center mt-2 gap-2' key={index}>
            <PokemonTypes type={type} />
            <h6 className='text-sm'>{type}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}
