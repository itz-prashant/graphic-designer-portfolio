import React from 'react'
import Cards from './Cards'
import { brandingAndVisualityData } from './Constant'
const Section = ({title}) => {
  return (
    <div className='px-10 mt-10 md:mt-5'>
        <h1 className='text-center md:text-5xl text-3xl font-mono font-extrabold text-cyan-900'>{title}</h1>
        <Cards data={brandingAndVisualityData}/>
    </div>
  )
}

export default Section