import React, { useContext, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

import { Context } from './ContextApi';
import { Link } from 'react-router-dom';
const Header = () => {

  const {menu, setMenu} = useContext(Context)
  return (
    <header className='flex items-center px-5 lg:px-0'>
        <div className='flex items-center w-full mx-auto max-w-screen-lg  h-[12vh] justify-between font-mono'>
           <h1 className='text-2xl'>RS</h1>
            <div className='flex gap-5 items-center text-xl text-zinc-400'>
                <Link to={"/"} className='cursor-pointer hover:text-zinc-500 hidden sm:block'>Home</Link>
                <Link to={"/contact"}  className='cursor-pointer hover:text-zinc-500 hidden sm:block'>Contact Info</Link>
                <span onClick={()=>setMenu(!menu)} 
                className='sm:hidden cursor-pointer text-3xl'>
                  {menu ? <RxCross1 /> : <IoMdMenu />}
                </span>
            </div>
        </div>
    </header>
  )
}

export default Header