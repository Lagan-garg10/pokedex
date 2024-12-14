import React, { useContext } from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import PokedexContext from '../context/PokedexContext';
import abilityContext from '../context/AbilityContext';
import generationContext from '../context/GenerationContext';

function Footer() {
  const location = useLocation();
  // const [isSelected, setIsSelected] = useState(false)

  const pokedexContext = useContext(PokedexContext);
  const AbilityContext = useContext(abilityContext);
  const GenerationContext = useContext(generationContext)

  const {
    selectedPokedexPokemonTab = null,
    setSelectedPokedexPokemonTab = () => { }
  } = pokedexContext || {};

  const {
    selectedAbilityTab = null,
    setSelectedAbilityTab = () => { }
  } = AbilityContext || {};

  const {
    selectedGenerationTab = null,
    setSelectedGenerationTab = () => { }
  } = GenerationContext || {};

  const pokemonTabs = {
    description: "description",
    evolution: "evolution",
    locations: "locations",
    moves: "moves",
  };

  const AbilityTabs = {
    description: "description",
    pokemon: "pokemon"
  }

  const berryTabs = {
    description: "description"
  }

  const generationTabs = {
    pokemon:'pokemon',
    type:'type',
    ability:'ability'
  }

  const PokedexRoutes = [
    { name: pokemonTabs.description, value: "Description" },
    { name: pokemonTabs.evolution, value: "Evolution" },
    { name: pokemonTabs.locations, value: "Catching" },
    { name: pokemonTabs.moves, value: "Capable Moves" },
  ]

  const AbiltiyRoutes = [
    { name: AbilityTabs.description, value: 'Description' },
    { name: AbilityTabs.pokemon, value: 'Pokemon' }
  ]

  const BerryRoutes = [
    { name: berryTabs.description, value: 'Description' }
  ]

  const generationRoutes = [
    {name:generationTabs.pokemon, value:'Pokemon'},
    {name:generationTabs.type, value:'Type'},
    {name:generationTabs.ability, value:'Ability'}
  ]

  return (
    <footer className='grid grid-cols-[5rem_auto_5rem] border-t-solid border-t-[0.5px] border-t-[rgba(255,255,255,0.23)]'>
      <div className='flex justify-center items-center'></div>
      <div className='border-solid border-[0.5px] border-[rgba(255,255,255,0.23)] border-t-0 border-b-0'>
        {
          location.pathname.includes('/pokedex/pokemon') && pokedexContext && (
            <ul className='grid text-white list-none grid-cols-4 h-full'>
              {PokedexRoutes.map((route) => (
                <li
                  onClick={() => setSelectedPokedexPokemonTab(route.name)}
                  className={`uppercase hover:bg-accent font-medium flex items-center justify-center cursor-pointer ${selectedPokedexPokemonTab === route.name && 'active'}`}
                  key={route.name}
                >
                  {route.value}
                </li>
              ))}
            </ul>
          )
        }
        {
          location.pathname.includes('/ability/description') && AbilityContext && (
            <ul className='grid text-white list-none grid-cols-4 h-full'>
              {AbiltiyRoutes.map((route) => (
                <li
                  onClick={() => setSelectedAbilityTab(route.name)}
                  className={`uppercase hover:bg-accent font-medium flex items-center justify-center cursor-pointer ${selectedAbilityTab === route.name && 'active'}`}
                  key={route.name}
                >
                  {route.value}
                </li>
              ))}
            </ul>
          )
        }
        {
          (location.pathname.includes('/berries/search') || location.pathname.includes('/berries/description')) && (
            <ul className='grid text-white list-none grid-cols-4 h-full'>
              {BerryRoutes.map((route) => (
                <li
                  // onClick={setIsSelected(true)}
                  className={`uppercase hover:bg-accent font-medium flex items-center justify-center cursor-pointer`}
                  key={route.name}
                >
                  {route.value}
                </li>
              ))}
            </ul>
          )
        }
        {
          (location.pathname.includes('/generation/description') && generationContext && (
            <ul className='grid text-white list-none grid-cols-4 h-full'>
              {generationRoutes.map((route) => (
                <li
                  onClick={()=>setSelectedGenerationTab(route.name)}
                  className={`uppercase hover:bg-accent font-medium flex items-center justify-center cursor-pointer ${selectedGenerationTab === route.name && 'active'}`}
                  key={route.name}
                >
                  {route.value}
                </li>
              ))}
            </ul>
          )
        )
        }
      </div>
      <div className='flex justify-center items-center'>
        <FaSignOutAlt className='text-[#e21b51] cursor-pointer text-[2.5rem]' />
      </div>
    </footer>
  );
}

export default Footer;
