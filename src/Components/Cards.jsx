import React from 'react'

import Card from './Card'

const Cards = ({data}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mt-12 md:mb-12 mt-8 mb-8'>
        {data.map((item, index)=>(
        <Card key={index} item={item}/>
    ))}
    </div>
  )
}

export default Cards