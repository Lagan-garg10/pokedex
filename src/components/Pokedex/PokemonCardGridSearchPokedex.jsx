import React, { useEffect, useState } from 'react'
import { FaCodeCompare } from "react-icons/fa6";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import PokemonTypes from './PokemonTypes';

export default function PokemonCardGridSearchPokedex({ data, removePokemon, index, addPokemonToCompare, addPokemonToListFunction }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState('')
  const [pokemonType, setPokemonType] = useState([])

  useEffect(() => {
    // console.log(data)
    setPokemonImage(data.pokemonImage)
    setPokemonName(data.pokemonName)
    setPokemonType(data.pokemonType)
  }, [data])

  return (
    
    <div className='w-[250px] flex flex-col justify-center items-center bg-custom1 p-4 rounded-2xl relative shadow-custom'>
      <div className='absolute top-3 left-3 size-12'>
        {
          location.pathname.includes('/pokedex/pokemon') || location.pathname.includes('/pokedex/search') ? (<FaPlus onClick={()=>{addPokemonToListFunction(data)}} className='cursor-pointer text-[#27af0f]' />) : (<FaTrash onClick={()=>{removePokemon(data)}} className='text-[#e21b51]' />)
        }
      </div>
      <div className='absolute top-3 right-3 size-5'>
        <FaCodeCompare onClick={()=>addPokemonToCompare(index)} className='text-[#1f51ff] cursor-pointer' />
      </div>
      <h3 className='text-center cursor-pointer mt-4'>{pokemonName}</h3>
      <img className='h-40 cursor-pointer' onClick={() => { navigate(`/pokedex/pokemon/${index}`) }} src={pokemonImage} alt="" />
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
