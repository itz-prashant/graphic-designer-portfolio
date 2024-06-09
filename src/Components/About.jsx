import React from 'react'

const About = () => {
  return (
    <div className='flex justify-between w-full max-w-screen-lg mx-auto px-3 sm:px-5 font-mono mt-3'>
        <div className='w-full flex flex-col sm:gap-3 gap-1 justify-center'>
            <h1 className='md:text-5xl text-3xl font-mono font-extrabold text-cyan-900'>About me</h1>
            <p className='md:text-lg text-xs sm:text-sm font-semibold text-zinc-500'>
            Multi-talented Graphic Designer with 1 years of experience in designing photos for advertisement and Printing purpose. Areas of expertise include marketing and advertising design and knowledge of Adobe Suite (Photoshop, Illustrator, InDesign) and Coral Draw program for use in the field of graphic design.
            </p>
        </div>
    </div>
  )
}

export default About