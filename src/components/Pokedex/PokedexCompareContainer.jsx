import React, { useContext, useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import axios from 'axios'
import { pokemonTypesData } from './PokemonTypes'
import PokedexContext from '../../context/PokedexContext'
import {useNavigate} from 'react-router-dom'

export default function PokedexCompareContainer({ data, value }) {
  const navigate = useNavigate()

  var {comparePokemon, setComparePokemon, addPokemonToList, setAddPokemonToList} = useContext(PokedexContext)
  
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState('')
  const [pokemonType, setPokemonType] = useState([])
  const [isDataReady, setIsDataReady] = useState(false)
  const [isData, setIsData] = useState(true)

  function deletePokemonToCompare(){
    if(value === '1'){
      setComparePokemon({
        ...comparePokemon,
        firstPokemonToCompare:'',
        lastModification:'pokemonSecond'
      })
      setIsData(false)
    }
    else if(value === '2'){
      setComparePokemon({
        ...comparePokemon,
        secondPokemonToCompare:'',
        lastModification:'pokemonFirst'
      })
      setIsData(false)
    }
  }

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

  const [fullPokemonStat, setFullPokemonStat] = useState({
    image: [''],
    strength: [''],
    weakness: [''],
    resistance: [''],
    vulnerable: ['']
  })
  let addStats = true
  async function getPokemonData() {
    if (data !== '') {
      var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`)
      // console.log(res)
      setPokemonName(res.data.forms[0].name)
      setPokemonImage(res.data.sprites.other.home.front_default)
      // res.data.types.forEach(element => {
        // var type = element.type.name
        // setPokemonType(pokemonType.push(element.type.name))

        const types = res.data.types.map(element => element.type.name);
        setPokemonType(types);

        // setPokeonType([...pokemonType, type])
      // });
      // console.log('yes')
      // console.log(pokemonType)
    }
  }

  function getPokemonStats() {
    var x = { ...fullPokemonStat }
    // console.log(pokemonType)
    pokemonType.forEach(element => {
      Object.keys(pokemonTypesData[element]).forEach(element1 => {
        pokemonTypesData[element][element1].forEach(element2 => {
          // console.log(element2)
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
      // console.log(fullPokemonStat)
    });
    setFullPokemonStat(x)
    setIsDataReady(true)
  }
  useEffect(() => {
    async function l() {
      await getPokemonData()
    }
    l()
    // console.log('yes')
  }, [data])

  useEffect(() => {
    getPokemonStats();
    // console.log(fullPokemonStat)
    // console.log('yes1')
  }, [pokemonType])

  return (
    <div className='h-full w-full'>
      {
        data === ''||isData===false ? (
          <div className='flex justify-center items-center flex-col gap-12 h-full'>
            <button className='cursor-pointer bg-accent rounded-[10rem] p-8 flex justify-center items-center border-none'><FaPlus className='text-[5rem] text-white' /></button>
            <h3 className='text-white uppercase tracking-wide'>Add Pokemon To Comparison</h3>
          </div>
        ) : (
          <div className='h-full grid grid-rows-[90%_10%] grid-cols-[1fr]'>
            {/* {getPokemonData()} */}
            <div className='text-white uppercase w-full grid grid-rows-[40%_60%]'>
              {/* {getPokemonStats()} */}
              <div className='flex flex-col justify-center items-center'>
                <h3>{pokemonName}</h3>
                <img className='h-36' src={pokemonImage} alt="" />
              </div>
              <div className='w-full flex flex-col gap-4 items-start h-3/4 overflow-x-hidden overflow-y-scroll pb-4'>
                {
                  isDataReady === true ?
                    (Object.keys(fullPokemonStat).map((item, index) => (
                      <div key={index} className='grid grid-cols-[25%_75%] w-full gap-8'>
                        {item === 'image'?(
                        <h4 className='flex justify-end items-center'>Type:</h4>
                        ):(
                        <h4 className='flex justify-end items-center'>{`${item}:`}</h4>)}
                        <div key={index} className='flex gap-4 w-full flex-wrap'>
                          {fullPokemonStat[item].map((item1, index1) => (
                            index1 !== 0 ? (<div key={index} className='flex justify-center items-center flex-col gap-4'>
                              <img className='h-12 w-12 ' src={item1} alt="type img" />
                            </div>) : ('')
                          ))}
                        </div>
                      </div>
                    )))
                    :
                    (<h1>loading!!!!</h1>)
                }
              </div>
            </div>
            <div className='grid grid-cols-3 w-full h-full mt-[-65px]'>
              <button onClick={AddPokemonToList} className='text-xl font-normal uppercase border-2 border-[rgba(255_255_255_0.647)] text-[rgb(288_288_288)] bg-transparent ease-in-out duration-300 hover:bg-[#1f51ff] hover:border-[#1f51ff]'>Add</button>
              <button onClick={() => { navigate(`/pokedex/pokemon/${data}`) }} className='text-xl font-normal uppercase border-2 border-[rgba(255_255_255_0.647)] text-[rgb(288_288_288)] bg-transparent ease-in-out duration-300 hover:bg-[#2faf0f] hover:border-[#2faf0f]'>View</button>
              <button onClick={deletePokemonToCompare} className='text-xl font-normal uppercase border-2 border-[rgba(255_255_255_0.647)] text-[rgb(288_288_288)] bg-transparent ease-in-out duration-300 hover:bg-[#e21b5a] hover:border-[#e21b5a]'>Remove</button>
            </div>
          </div>
        )
      }
    </div>
  )
}
