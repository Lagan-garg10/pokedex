import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
export default function GenerationAbility({data}) {
  const [abilityList, setAbilityList] = useState([])
  async function fetchData(){
    var list = []
    var res = await axios.get(`https://pokeapi.co/api/v2/generation/${data}/`) 
    if(res.data.abilities.length !== 0){
      res.data.abilities.forEach(element => {
        list.push(element.name)
      })
    }
    setAbilityList(list)
  }
  useEffect(()=>{
    fetchData()
  })
  return (
    <div className='text-white overflow-y-scroll h-[80vh]'>
      <h1 className='text-center text-[40px]'>New Abilities</h1>
      <div className='grid grid-cols-5 gap-5'>
        {
          abilityList.map((ability, index)=>(
            <div className='bg-custom1 text-center rounded-[1rem] p-4 text-[20px]' key={index}>
              <h2>{ability}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}
