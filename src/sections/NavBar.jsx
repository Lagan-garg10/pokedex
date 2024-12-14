import React, { useEffect } from 'react';
import pokeball_icon from '../assets/pokeball-icon.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate()
  const mainNavigationRoutes = [
    {name:'Home', route:"/"},
    {name:'Ability', route:'/ability/search'},
    {name:'Pokedex', route:'/pokedex/search'},
    {name:'Berries', route:'/berries/search'},
    {name:'Generation', route:'/generation/search'},
    {name: "About", route: "/about" }

  ]
  const navigationRoutes = [
    { name: "Search", route: "/pokedex/search" },
    { name: "Compare", route: "/pokedex/compare" },
    { name: "Pokemon", route: "/pokedex/pokemon" },
    { name: "My List", route: "/pokedex/list" },
  ];

  // useEffect(() => {
  //   const index = navigationRoutes.findIndex(({ route }) => location.pathname.includes(route))
  //   ul(index)
  // }, [location.pathname]);

  // function ul(index) {
  //   const underlines = document.querySelectorAll(".underlineLine");
  //   underlines.forEach((underline) => {
  //     underline.style.transform = `translate3d(${index * 100}%, 0, 0)`;
  //   });
  // }

  function HomePageDisplay(){
    navigate('/')
  }

  return (
    <nav className='grid grid-cols-[5rem_auto_5rem] border-b-solid border-b-[0.5px] border-b-[rgba(255,255,255,0.23)]'>
      <div className='flex justify-center items-center'>
        <img onClick={HomePageDisplay} src={pokeball_icon} alt="pokeball icon" className='cursor-pointer h-12' />
      </div>
      <div className='border-solid border-[0.5px] border-[rgba(255,255,255,0.23)] border-b-0 border-t-0'>
        <ul className='grid grid-cols-8 w-full h-full relative z-10 list-none'>
          {/* <div className='underlineLine block absolute z-0 bottom-0 pointer-events-none ease-in-out duration-500 bg-accent w-1/5 left-0 mix-blend-[initial]' style={{height:'calc(4px/2)'}}></div>
          <div className='underlineLine block absolute z-0 bottom-0 pointer-events-none ease-in-out duration-500 bg-accent w-1/5 left-0 mix-blend-[initial]' style={{height:'calc(4px/2)'}}></div>
          <div className='underlineLine block absolute z-0 bottom-0 pointer-events-none ease-in-out duration-500 bg-accent w-1/5 left-0 mix-blend-[initial]' style={{height:'calc(4px/2)'}}></div> */}
          {
            location.pathname.includes('/pokedex')?(
              navigationRoutes.map(({ name, route }, index) => (
                <Link className='text-white no-underline flex justify-center items-center border-b-solid border-b-[1px] border-b-transparent' to={route} key={index}>
                  <li className='uppercase cursor-pointer font-medium tracking-[0.2rem]'>{name}</li>
                </Link>
              ))
            ):(
              mainNavigationRoutes.map(({ name, route }, index) => (
                <Link className='text-white no-underline flex justify-center items-center border-b-solid border-b-[1px] border-b-transparent' to={route} key={index}>
                  <li className='uppercase cursor-pointer font-medium tracking-[0.2rem]'>{name}</li>
                </Link>
              ))
            )
          }
        </ul>
      </div>
      <div className='flex justify-center items-center'>
        <GiHamburgerMenu className='text-white cursor-pointer text-[2rem]' />
      </div>
    </nav>
  );
}

export default NavBar;
