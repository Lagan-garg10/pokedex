import React, { useEffect, useState } from 'react'
import axios from 'axios'
function CapableMovesPokemon({ data }) {
  const [allMoves, setAllMoves] = useState([])
  const [allAbilities, setAllAbilities] = useState([])
  async function getMoves() {
    var moves = []
    var abilities = []
    var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`)
    res.data.abilities.forEach(element => {
      abilities.push(element.ability.name)
    });
    res.data.moves.forEach(element => {
      moves.push(element.move.name)
    })
    setAllMoves(moves)
    setAllAbilities(abilities)
  }
  useEffect(() => {
    getMoves()
  }, [data])
  return (
    <div className='w-full h-[80vh] overflow-y-scroll'>
      <h1 className='text-white uppercase p-4 text-[24px]'>Abilities</h1>
      <ul className='list-none text-white grid grid-cols-4 grid-auto-rows-150 p-4 gap-4 w-full overflow-y-scroll'>
        {
          allAbilities.map((element, index) => (
            <li className='h-full p-8 text-xl bg-accent rounded-2xl flex items-center justify-center cursor-pointer' key={index}>{element}</li>
          ))
        }
      </ul>
      <h1 className='text-white uppercase p-4 text-[24px]'>Moves</h1>
      <ul className='list-none text-white grid grid-cols-4 grid-auto-rows-150 p-4 gap-4 w-full overflow-y-scroll'>
        {
          allMoves.map((element, index) => (
            <li className='h-full p-8 text-xl bg-white-opacity rounded-2xl flex items-center justify-center cursor-pointer' key={index}>{element}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CapableMovesPokemon
