import React from 'react'

const Card = ({item}) => {
  return (
    <div className='relative'>
        <div className='relative cursor-zoom-in'>
            <img src={item.img} alt="" />
            <div className='absolute bg-black/50 bottom-0 left-0 right-0 p-3 font-mono text-white text-lg'>
                {item.name}
            </div>
        </div>
    </div>
  )
}

export default Card