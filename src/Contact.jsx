import React from 'react'

const Contact = () => {
  return (
    <div className='w-full px-5 h-[60vh] flex justify-center'>
      <div className='flex flex-col justify-center gap-3 font-mono'>
        <h1 className='text-center md:text-5xl text-2xl font-mono font-extrabold text-cyan-900 tracking-tighter'>Intrested in my work ?</h1>
        <h4 className='text-zinc-500 text-lg'>For any personal question:</h4>
        <h1 className='text-xl font-bold text-cyan-900'>Riya Sharma</h1>
        <h3 className='text-xl font-medium underline text-zinc-600'>riyasharxma@gmail.com</h3>
        <h3 className='text-xl font-medium underline-offset-1 text-zinc-600'>+91 8851313180</h3>
      </div>
    </div>
  )
}

export default Contact