import React from 'react'
import { FaGithub } from "react-icons/fa";
function About() {
  return (
    <div className='flex flex-col justify-center items-center h-full gap-8 text-white mt-4 uppercase'>
      <img src="https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png" className='h-40 rounded-[10rem] border-[0.3rem] border-solid border-accent p-4' alt="profile-img" />
      <h1 className='text-[3rem]'>Hi, I am Lagan Garg</h1>
      <h2>The creator of this awersome project</h2>
      <h4>This project is create for my resume</h4>
      <div>
        <a href="https://github.com/Lagan-garg10" className='flex rounded-[2rem] cursor-pointer'>
          <FaGithub className='text-[2.5rem] text-accent'/>
        </a>
      </div>
    </div>
  )
}

export default About
