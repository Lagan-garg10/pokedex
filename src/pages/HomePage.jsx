import React, { useEffect } from 'react';
import banner from '../assets/banner.webp';
import FamousPokemon from '../components/FamousPokemon';
import gsap from 'gsap'
import CTAButton from '../components/CTAButton';
export default function HomePage() {
  useEffect(()=>{
    gsap.to('.homePageMainDiv div',{
      duration:1,
      opacity:1,
      marginLeft:0,
    })
    gsap.to('.homePageMainDiv div div h1',{
      duration:1,
      fontSize:'3rem',
      fontWeight:800,
      color:'white',
      marginLeft:0
    })
  },[])
  return (
    <div className='max-h-[80vh] overflow-y-scroll homePageMainDiv'>
      <div className="hero opacity-0 ml-[-300px] h-[30vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${banner})` }}>
        <div className="text-center">
          <h1 className="text-black ml-[-100px]">Explore the World of Pokémon</h1>
          <p className="text-lg mt-4 font-medium">Discover, Learn, and Become a Pokémon Master!</p>
          <CTAButton content={'Enter Pokedex'} link={'/pokedex/search'} />
        </div>
      </div>
      <div>
        <h1 className='text-white text-center mt-8 text-[30px] font-semibold tracking-2'>Famous Pokemons</h1>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-16 m-16 mt-8'>
          <FamousPokemon data={1} />
          <FamousPokemon data={6} />
          <FamousPokemon data={25} />
        </div>
      </div>
      <div className="my-10 text-white">
        <h2 className="text-white text-center mt-8 text-[30px] font-semibold tracking-2">Trainer Tips</h2>
        <div className="flex flex-col justify-center items-center mt-4">
          <ul className='flex flex-col gap-4 text-[1.3rem] text-right'>
            <li className='bg-custom1 rounded-md px-8 py-2'>Tip #1: Use type advantages to win battles.</li>
            <li className='bg-custom1 rounded-md px-8 py-2'>Tip #2: Catch Pokémon with higher CP.</li>
            <li className='bg-custom1 rounded-md px-8 py-2'>Tip #3: Make sure to evolve Pokémon strategically.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
