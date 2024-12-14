import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AbilityCardGrid from '../../components/Ability/AbilityCardGrid';
import AbilityContext from '../../context/AbilityContext'

export default function SearchAbility() {
    const {abilityId, setAbilityId} = useContext(AbilityContext)
    const [allData, setAllData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    async function fetchData(url) {
        const abilityData = {
            name: '',
            generation: '',
            pokemon_No: 0,
            id:-1
        };
        const res = await axios.get(url);
        abilityData.generation = res.data.generation.name;
        abilityData.name = res.data.name;
        abilityData.pokemon_No = res.data.pokemon.length
        setAllData(prevValue => [...prevValue, abilityData]);
        abilityData.id = res.data.id
    }

    useEffect(() => {
        async function fetchAllData() {
            const res = await axios.get('https://pokeapi.co/api/v2/ability?offset=0&limit=367');
            res.data.results.forEach(element => {
                fetchData(element.url);
            });
        }
        fetchAllData();
    }, []);


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = allData.filter(element => 
        element.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    function setAbilityIdFunction(id){
        setAbilityId(id)
    }

    return (
        <>
            <div className='h-full w-full max-w-full text-white uppercase'>
                <input
                    type="text"
                    className='w-full h-[9%] pl-4 text-[1.3rem] bg-custom1 outline-none border-none text-white shadow-custom'
                    placeholder='Search Ability'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className='max-h-[80vh] overflow-y-scroll'>
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 m-16 mt-8'>
                        {filteredData.length > 0 ? (
                            filteredData.map((element, index) => (
                                <AbilityCardGrid setAbilityIdFunction={setAbilityIdFunction}  fullData={element} key={index} id={element.id}/>
                            ))
                        ) : (
                            <p className='text-center text-white'>No abilities found</p> // Message when no abilities match
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
