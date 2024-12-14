import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavBar from './sections/NavBar';
import Wrapper from './sections/Wrapper';
import Footer from './sections/Footer';
import Background from './components/Background';
import SearchPokemon from './pages/Pokedex/SearchPokemon';
import About from './pages/About';
import Compare from './pages/Pokedex/Compare';
import Pokemon from './pages/Pokedex/Pokemon';
import MyList from './pages/Pokedex/MyList';
import HomePage from './pages/HomePage'
import SearchAbility from './pages/Ability/SearchAbility';
import PokedexContextProvider from './context/PokedexContextProvider';
import AbilityDescription from './pages/Ability/AbilityDescription';
import AbilityContextProvider from './context/AbilityContextProvider'
import SearchBerry from './pages/Berry/SearchBerry';
import BerryContextProvider from './context/BerryContextProvider'
import BerryDescription from './pages/Berry/BerryDescription.jsx'
import GenerationSearch from './pages/Generation/GenerationSearch.jsx';
import GenerationContextProvider from './context/GenerationContextProvider.jsx';
import GenerationDescription from './pages/Generation/GenerationDescription.jsx';


function AppRoutes() {
  const location = useLocation();
  return (

    <Routes>
      <Route element={<Wrapper><SearchPokemon /></Wrapper>} path='/pokedex/search' />
      <Route element={<Wrapper><MyList /></Wrapper>} path='/pokedex/list' />
      <Route element={<Wrapper><Compare /></Wrapper>} path='/pokedex/compare' />
      <Route element={<Wrapper><About /></Wrapper>} path='/about' />
      <Route element={<Wrapper><Pokemon /></Wrapper>} path='/pokedex/pokemon/:id' />
      <Route element={<Wrapper><HomePage /></Wrapper>} path='/' />
      <Route element={<Wrapper><SearchAbility /></Wrapper>} path='/ability/search' />
      <Route element={<Wrapper><AbilityDescription /></Wrapper>} path='/ability/description/:id' />
      <Route element={<Wrapper><SearchBerry /></Wrapper>} path='/berries/search' />
      <Route element={<Wrapper><BerryDescription /></Wrapper>} path='/berries/description/:id' />
      <Route element={<Wrapper><GenerationSearch /></Wrapper>} path='/generation/search' />
      <Route element={<Wrapper><GenerationDescription /></Wrapper>} path='/generation/description/:id'/>
      {
        location.pathname.includes('/pokedex') ? (
          <Route element={<Navigate to='/pokedex/pokemon/1' />} path='*' />
        ) : (
          <Route element={<Navigate to="/" />} path="*" />
        )
      }
    </Routes>
  );
}

function Main() {
  const location1 = useLocation();
  return (
    <div className="z-10 bg-[rgba(4,6,20,0.85)] h-screen w-screen backdrop-blur-2xl grid grid-rows-[10vh_auto_10vh] grid-cols-[1fr]">
      {
        location1.pathname.includes('/pokedex') ? (
          <PokedexContextProvider>
            <NavBar />
            <AppRoutes />
            <Footer />
          </PokedexContextProvider>
        ) : location1.pathname.includes('/ability') ? (
          <>
            <AbilityContextProvider>
              <NavBar />
              <AppRoutes />
              <Footer />
            </AbilityContextProvider>
          </>
        ) : location1.pathname.includes('/berries') ? (
          <>
            <BerryContextProvider>
              <NavBar />
              <AppRoutes />
              <Footer />
            </BerryContextProvider>
          </>
        ) : location1.pathname.includes('/generation') ? (
          <>
            <GenerationContextProvider>
              <NavBar />
              <AppRoutes />
              <Footer />
            </GenerationContextProvider>
          </>
        ) : (
          <>
            <NavBar />
            <AppRoutes />
            <Footer />
          </>
        )
      }
    </div>
  );
}

function App() {
  return (
    <div className='relative max-w-[100vw] overflow-hidden h-screen'>
      <Background />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  )
}
export default App;
