import React, {useEffect, useState} from 'react'
import axios from 'axios'
function LocationPokemon({data}) {
  const [location, setLocation] = useState([])
  async function getLocation() {
    var allLocations = []
    var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}/encounters`)
    if(res.data.length !== 0){
      res.data.forEach(element => {
        allLocations.push(element.location_area.name)
      });
    }
    setLocation(allLocations)
  }
  useEffect(()=>{
    getLocation()
  },[data])
  return (
    <div className='w-full h-full'>
      <ul className='list-none text-white grid grid-cols-4 grid-auto-rows-150 p-4 gap-4 w-full overflow-y-scroll h-[80vh]'>
        {
          location.length!==0&&location.map((element, index)=>(
            <li className='h-[8rem] p-8 text-xl bg-white-opacity rounded-2xl flex items-center justify-center cursor-pointer' key={index}>{element}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default LocationPokemon
