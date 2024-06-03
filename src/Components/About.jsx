import React from 'react'
import pic from '../assets/peep-11.svg'
const About = () => {
  return (
    <div className='flex justify-between w-full max-w-screen-lg mx-auto px-3 sm:px-5 font-mono'>
        <img className='lg:ml-28 flex-shrink-0 sm:ml-24 md:w-72 sm:w-48 w-40' src={pic} alt="" />
        <div className='w-1/2 flex flex-col sm:gap-3 gap-1 justify-center'>
            <h1 className='md:text-6xl text-2xl font-extrabold text-zinc-800'>About me</h1>
            <p className='md:text-lg text-xs sm:text-sm font-semibold text-zinc-500'>
            Multi-talented Graphic Designer with 1 years of experience in designing photos for advertisement and Printing purpose. Areas of expertise include marketing and advertising design and knowledge of Adobe Suite (Photoshop, Illustrator, InDesign) and Coral Draw program for use in the field of graphic design.
            </p>
        </div>
    </div>
  )
}

export default About