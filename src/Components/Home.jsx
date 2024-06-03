import React, { useContext } from 'react'
import peep9 from '../assets/peep-9.svg'
import { Context } from './ContextApi'

const Home = () => {

    const {menu} = useContext(Context)

  return (
    <div className='w-full max-w-screen-lg mx-auto font-mono h-[80vh] px-5 lg:px-0 flex flex-col items-center justify-center relative'>
        {menu && <div className={`absolute flex flex-col items-center ${menu ? "top-0" : "top-[-100vh]"} bg-white justify-center w-full sm:hidden h-[88vh] text-xl text-zinc-400 gap-4`}>
                <span className='cursor-pointer hover:text-zinc-500'>Home</span>
                <span className='cursor-pointer hover:text-zinc-500'>Contact Info</span>
        </div>}
        <img src={peep9} alt="" />
        <div className='flex flex-col items-center -mt-9'>
            <h1 className='sm:text-3xl text-xl text-zinc-500'>Hello I'm ,</h1>
            <h1 className='sm:text-5xl text-3xl text-zinc-700 font-medium'>Riya Sharma</h1>
            <p className='text-lg font-semibold text-zinc-500'>I'm an illustrator and graphic designer.</p>
        </div>
    </div>
  )
}

export default Home