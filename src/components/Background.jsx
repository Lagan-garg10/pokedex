import React from 'react'
import pokeball from '../assets/pokeball.png'
import pokeball2 from '../assets/pokeball2.png'
function Background() {
  return (
    <div className='-z-10 absolute max-h-screen grid gap-8 grid-cols-3'>
      <img src={pokeball} alt="pokeball" className='h-80 max-inline-size-full max-block-size-auto'/>
      <img src={pokeball2} alt="pokeball" className='h-80 max-inline-size-full max-block-size-auto'/>
      <img src={pokeball} alt="pokeball" className='h-80 max-inline-size-full max-block-size-auto'/>
      <img src={pokeball2} alt="pokeball" className='h-80 max-inline-size-full max-block-size-auto'/>
      <img src={pokeball} alt="pokeball" className='h-80 max-inline-size-full max-block-size-auto'/>
      <img src={pokeball2} alt="pokeball"/>
    </div>
  )
}

export default Background
