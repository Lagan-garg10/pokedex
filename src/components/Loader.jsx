import React from 'react'
import pokeballLoader from "../assets/pokeball-loader.gif";
export default function Loader() {
  return (
    <div className='h-full flex justify-center items-center'>
      <img src={pokeballLoader} alt="" />
    </div>
  )
}
