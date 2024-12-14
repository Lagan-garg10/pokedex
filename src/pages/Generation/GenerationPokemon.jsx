import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
export default function GenerationPokemon({data}) {
  const [pokemonList, setPokemonList] = useState([])
  async function fetchData(){
    var list = []
    var res = await axios.get(`https://pokeapi.co/api/v2/generation/${data}/`) 
    if(res.data.pokemon_species.length !== 0){
      res.data.pokemon_species.forEach(element => {
        list.push(element.name)
      })
    }
    setPokemonList(list)
  }
  useEffect(()=>{
    fetchData()
  })
  return (
    <div className='text-white overflow-y-scroll h-[80vh]'>
      <h1 className='text-center text-[40px]'>New Pokemon</h1>
      <div className='grid grid-cols-5 gap-5 '>
        {
          pokemonList.map((pokemon, index)=>(
            <div className='bg-custom1 text-center rounded-[1rem] p-4 text-[20px]' key={index}>
              <h2>{pokemon}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}
