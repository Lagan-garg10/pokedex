import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BerryCardGrid({ data, value, BerryIdSet }) {
  const navigate = useNavigate()
  function setBerryId(){
    BerryIdSet(value)
    navigate(`/berries/description/${value}`)
  }
  return (
    <div onClick={setBerryId} className='max-w-sm mx-auto bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <h1 className='text-2xl font-bold text-yellow-300 mb-4 text-center'>{data.name}</h1>
      <div className='flex justify-center mb-2'>
        <img src={data.image} alt={`${data.name} berry`} className='w-28 h-28 object-cover rounded-full shadow-lg'/>
      </div>
      <div className='text-center'>
        <h2 className='text-lg font-semibold text-blue-400 mb-2'>Flavours:</h2>
        <ul className='space-y-1'>
          {data.flavours.map((element, index) => (
            <li
              key={index}
              className={`text-white px-3 py-1 rounded ${
                element === 'sweet'
                  ? 'bg-pink-500'
                  : element === 'spicy'
                  ? 'bg-red-500'
                  : element === 'dry'
                  ? 'bg-blue-500'
                  : element === 'bitter'
                  ? 'bg-green-500'
                  : element === 'sour'
                  ? 'bg-yellow-500'
                  : 'bg-gray-700'
              }`}
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
