import React, { useContext } from 'react'
import peep9 from '../assets/peep-9.svg'
import { Context } from './ContextApi'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
    const {menu} = useContext(Context)

  return (
    <div className='w-full max-w-screen-lg mx-auto font-mono h-[80vh] px-5 lg:px-0 flex flex-col items-center justify-center relative'>
        {menu && <div className={`shadow absolute flex flex-col items-center ${menu ? "top-0" : "top-[-100vh]"} bg-white justify-center w-full sm:hidden h-full text-xl text-zinc-400 gap-4`}>
        <Link to={"/"} className={`cursor-pointer hover:text-cyan-900 ${location.pathname == "/" ? "underline underline-offset-8" : ""}`}>Home</Link>
        <Link to={"/contact"} className={`cursor-pointer hover:text-cyan-900 ${location.pathname == "/contact" ? "underline underline-offset-8" : ""}`}>Contact Info</Link>
        </div>}
        <img src={peep9} alt="" />
        <div className='flex flex-col items-center -mt-9'>
            <h1 className='sm:text-3xl text-xl text-zinc-600'>Hello I'm ,</h1>
            <h1 className='sm:text-5xl text-3xl text-cyan-900 font-semibold'>Riya Sharma</h1>
            <p className='text-lg font-semibold text-zinc-600'>I'm an illustrator and graphic designer.</p>
        </div>
    </div>
  )
}

export default Home