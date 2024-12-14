import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import GenerationContext from '../../context/GenerationContext'
import {useNavigate} from 'react-router-dom'
export default function GenerationSearch() {
  const navigate = useNavigate()
  const {setGenerationId} = useContext(GenerationContext)
  const [data, setData] = useState([])
  async function fetchFullDataGeneration(url) {
    var dataGeneration = {
      name: '',
      main_region: ''
    }
    var res = await axios.get(url)
    dataGeneration.name = res.data.name
    dataGeneration.main_region = res.data.main_region.name
    setData(prev => [...prev, dataGeneration])
  }
  function ClickedGeneration(name){
    setGenerationId(name)
    navigate(`/generation/description/${name}`)
  }
  useEffect(() => {
    async function fetchGenerationsData() {
      var res = await axios.get('https://pokeapi.co/api/v2/generation/')
      res.data.results.forEach(element => {
        fetchFullDataGeneration(element.url)
      })
    }
    fetchGenerationsData()
  }, [])
  return (
    <>
      <div className='h-full w-full max-w-full text-white uppercase'>
        <input
          type="text"
          className='w-full h-[9%] pl-4 text-[1.3rem] bg-custom1 outline-none border-none text-white shadow-custom'
          placeholder='Search Ability'
        />
        <div className='max-h-[80vh] overflow-y-scroll'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 m-16 mt-8'>
            {
              data.map((element, index) => (
                <div key={index} onClick={()=>ClickedGeneration(element.name)} className='w-[250px] flex flex-col justify-center items-center bg-custom1 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
                  <h2 className='text-center text-[20px] hover:text-[25px] font-bold cursor-pointer text-gray-100 mt-2 hover:text-accent'>{element.name}</h2>
                  <h3>Main region : {element.main_region}</h3>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
