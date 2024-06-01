import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

const Header = () => {

  const [menu, setMenu] = useState(false)
  return (
    <header className='flex items-center sm:h-20 px-5 lg:px-0'>
        <div className='flex items-center w-full mx-auto max-w-screen-lg  h-16 justify-between font-mono'>
            <h1 className='sm:text-3xl text-2xl font-semibold text-zinc-500 '>Riya Sharma</h1>
            <div className='flex gap-5 items-center text-xl text-zinc-400'>
                <span className='cursor-pointer hover:text-zinc-500 hidden sm:block'>Home</span>
                <span className='cursor-pointer hover:text-zinc-500 hidden sm:block'>Contact Info</span>
                <span onClick={()=>setMenu(!menu)} 
                className='sm:hidden cursor-pointer text-3xl'>
                  <IoMdMenu />
                </span>
            </div>
        </div>
    </header>
  )
}

export default Header