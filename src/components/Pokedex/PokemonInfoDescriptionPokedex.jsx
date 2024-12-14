import React, { useEffect, useState, useContext } from 'react'
import { pokemonTypesData } from './PokemonTypes'
import axios from 'axios'
import PokedexContext from '../../context/PokedexContext'
export default function PokemonInfoDescriptionPokedex({ data }) {
  var {addPokemonToList, setAddPokemonToList} = useContext(PokedexContext)

  const [pokemonName, setPokemonName] = useState('')
  const [pokemonType, setPokemonType] = useState([])
  var addStats = true
  const [fullPokemonStat, setFullPokemonStat] = useState({
    image: [''],
    strength: [''],
    weakness: [''],
    resistance: [''],
    vulnerable: ['']
  })
  const [fullPokemonStatText, setFullPokemonStatText] = useState({
    image: [''],
    strength: [''],
    weakness: [''],
    resistance: [''],
    vulnerable: ['']
  })
  const [baseStats, setBaseStats] = useState({
    'hp': '',
    'attack': '',
    'defense': '',
    'special-attack': '',
    'special-defense': '',
    'speed': ''
  })
  async function getFullData() {
    var baseStatsAll = {
      hp: '',
      attack: '',
      defense: '',
      'special-attack': '',
      'special-defense': '',
      speed: ''
    }
    // var allTypes = []
    var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`)
    const types = res.data.types.map(element => element.type.name);
    setPokemonType(types);
    setPokemonName(res.data.forms[0].name)
    res.data.stats.forEach(element => {
      // console.log(element)
      baseStatsAll[element.stat.name] = element.base_stat
    });
    setBaseStats(baseStatsAll)
  }

  async function getPokemonStats() {
    var x = { ...fullPokemonStat }
    // console.log(pokemonType)

    pokemonType.forEach(element => {
      Object.keys(pokemonTypesData[element]).forEach(element1 => {
        pokemonTypesData[element][element1].forEach(element2 => {
          fullPokemonStat[element1].forEach(element3 => {
            if (element3 === element2) {
              addStats = false
            }
          })
          if (addStats === true) {
            x[element1].push((element2))
            addStats = true
          }
        });
      })
    });
    setFullPokemonStat(x)
  }
  function ExtractWordFromLink() {
    var x = {
      strength: [],
      weakness: [],
      resistance: [],
      vulnerable: []
    }
    Object.entries(fullPokemonStat).map(([key, value]) => (
      key!=='image'&&(
      value.forEach(url => {
        if(url!==''){
        const Link1 = url.split('/').pop();
        const text = Link1.split('.')[0];
        x[key].push(text)}
      }))
    ));
    setFullPokemonStatText(x)
  }
  useEffect(()=>{
    async function l() {
      await getFullData()
    }
    l()
  },[])

  useEffect(() => {
    if (pokemonType.length > 0) {
      getPokemonStats()
    }
  }, [pokemonType]) 

  async function AddPokemonToList() {
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

    setAddPokemonToList([...addPokemonToList, PokemonData])
  }

  useEffect(()=>{
    ExtractWordFromLink()
  },[fullPokemonStat])
  return (
    <>
      <div className='description absolute top-4 left-4 text-white p-4 w-96 uppercase bg-custom1'>
        <h1 className='mb-4 text-[20px] font-bold'>{pokemonName}</h1>
        <h3>{`type:${pokemonType.map((element) => (element))}`}</h3>
        <button className='absolute right-4 bottom-[-2rem] p-[0.8rem] bg-transparent border-[0.1rem] border-solid border-accent outline-none uppercase font-bold'>See Next Revolution</button>
      </div>
      <div className='absolute left-4 bottom-32'>
        <ul className='list-none flex flex-col gap-4'>
          {
            Object.entries(baseStats).map(([key,value])=>(
              <li className='text-white text-right uppercase flex justify-end items-center gap-4'>
                {`${key}: ${value}`}
                <progress max={100} value={value} style={{width:'10rem'}}/>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='absolute bottom-12 right-8 p-4 text-white w-[30rem] bg-custom1 battle-stats'>
        <ul className='list-none flex flex-col gap-2 text-[18px]'>
          {
            Object.entries(fullPokemonStatText).map(([key, value]) => (
              <li className='gird grid-cols-[max-content_80%]' key={key}>
                <span key={key}>{`${key}: `}</span>
                {
                  value.map((item, index) => ( 
                    <span key={index}>{`${item}, `}</span> 
                  ))
                }
              </li>
            ))
          }
        </ul>
        <button onClick={AddPokemonToList} className='absolute right-[-1rem] bottom-[-2rem] p-[0.8rem] bg-transparent border-[0.1rem] border-solid border-accent outline-none text-white uppercase font-bold cursor-pointer hover:bg-accent'>Add Pokemon</button>
      </div>
    </>
  )
}
