import React, { useContext} from 'react'
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logo from '../assets/logo.avif'
import { Context } from './ContextApi';
import { Link, useLocation} from 'react-router-dom';

const Header = () => {
  const location = useLocation()
  const {menu, setMenu} = useContext(Context)

  return (
    <header className='flex items-center px-5 lg:px-0 fixed w-full z-10 bg-white'>
        <div className='flex items-center w-full mx-auto max-w-screen-lg  h-[12vh] justify-between font-mono'>
           <img className='h-full' src={logo} alt="" />
            <div className='flex gap-5 items-center text-xl text-zinc-500'>
                <Link to={"/"} className={`cursor-pointer hover:text-cyan-900 hidden sm:block ${location.pathname == "/" ? "underline underline-offset-8" : ""}`}>Home</Link>
                <Link to={"/contact"} className={`cursor-pointer hover:text-cyan-900 hidden sm:block ${location.pathname == "/contact" ? "underline underline-offset-8" : ""}`}>Contact Info</Link>
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