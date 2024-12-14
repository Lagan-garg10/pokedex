import React from 'react';
import {useNavigate} from 'react-router-dom'
export default function AbilityCardGrid({ fullData, setAbilityIdFunction, id}) {
    const navigate = useNavigate()
    function click(){
        navigate(`/ability/description/${id}`)
        setAbilityIdFunction(id)
    }
    return (
        <div onClick={click} className='w-[250px] flex flex-col justify-center items-center bg-custom1 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
            <h2 className='text-center text-[20px] hover:text-[25px] font-bold cursor-pointer text-gray-100 mt-2 hover:text-accent'>{fullData.name}</h2>
            <div className='flex flex-col mt-3 space-y-1'>
                <h5 className='text-gray-200 text-sm hover:text-base'>{fullData.generation}</h5>
                <h5 className='text-gray-200 text-sm hover:text-base'>{`Pokémon No: ${fullData.pokemon_No}`}</h5>
            </div>
        </div>
    );
}
