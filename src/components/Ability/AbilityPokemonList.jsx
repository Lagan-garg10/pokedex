import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function AbilityPokemonList({ abilityId }) {
    const [pokemonWithHiddenAbility, setPokemonWithHiddenAbility] = useState([])
    const [pokemonWithoutHiddenAbility, setPokemonWithoutHiddenAbility] = useState([])
    const [abilityName, setAbilityName] = useState('')
    async function fetchData() {
        var pokemonWithHiddenAbility = []
        var pokemonWithoutHiddenAbility = []
        var res = await axios.get(`https://pokeapi.co/api/v2/ability/${abilityId}`)
        setAbilityName(res.data.name)
        res.data.pokemon.forEach(element => {
            if (element.is_hidden === true) {
                pokemonWithHiddenAbility.push(element.pokemon.name)
            }
            else {
                pokemonWithoutHiddenAbility.push(element.pokemon.name)
            }
        })
        setPokemonWithHiddenAbility(pokemonWithHiddenAbility)
        setPokemonWithoutHiddenAbility(pokemonWithoutHiddenAbility)
    }
    useEffect(() => {
        fetchData()
    }, [abilityId])
    return (
        <div className='p-8 rounded-lg shadow-lg max-h-[80vh] overflow-y-scroll'>
            <h1 className='text-3xl font-extrabold text-yellow-400 mb-6 text-center'>Pokémon with {abilityName} Ability (Hidden)</h1>
            <ul className='grid grid-cols-4 gap-4 mb-8'>
                {pokemonWithHiddenAbility.map((element, index) => (
                    <li key={index} className='bg-blue-600 hover:bg-blue-500 transition-all duration-200 ease-in-out p-3 rounded-lg text-white text-center shadow-md hover:scale-105'>
                        {element}
                    </li>
                ))}
            </ul>
            <h1 className='text-3xl font-extrabold text-yellow-400 mb-6 text-center'>Pokémon with {abilityName} Ability (Not Hidden)</h1>
            <ul className='grid grid-cols-3 gap-4'>
                {pokemonWithoutHiddenAbility.map((element, index) => (
                    <li key={index} className='bg-green-600 hover:bg-green-500 transition-all duration-200 ease-in-out p-3 rounded-lg text-white text-center shadow-md hover:scale-105'>
                        {element}
                    </li>
                ))}
            </ul>
        </div>
    )
}
