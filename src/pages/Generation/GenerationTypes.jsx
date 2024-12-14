import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
export default function GenerationTypes({data}) {
  const [typesList, setTypesList] = useState([])
  async function fetchData(){
    var list = []
    var res = await axios.get(`https://pokeapi.co/api/v2/generation/${data}/`) 
    if(res.data.types.length !== 0){
      res.data.types.forEach(element => {
        list.push(element.name)
      })
    }
    setTypesList(list)
  }
  useEffect(()=>{
    fetchData()
  })
  return (
    <div className='text-white overflow-y-scroll h-[80vh]'>
      <h1 className='text-center text-[40px]'>New Types</h1>
      <div className='grid grid-cols-5 gap-5 '>
        {
          typesList.map((type, index)=>(
            <div className='bg-custom1 text-center rounded-[1rem] p-4 text-[20px]' key={index}>
              <h2>{type}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}
