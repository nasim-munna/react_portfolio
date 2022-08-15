import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from "react-scroll";
const NavBar = () => {
    const [nav,setNav]=useState()
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        },
    ]
  return (
    <div className='flex bg-black w-full h-20 justify-between items-center fixed text-white'>
        <div>
            <h1 className='text-5xl font-signature px-4'>Nasim</h1>
        </div>
        <ul className='hidden md:flex'>
            
            {links.map(({link,id})=>(
                <li key={id} className='px-4 capitalize cursor-pointer text-gray-500 hover:scale-105 font-medium duration-200'>
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ))}
            
        </ul>
        <div onClick={()=>setNav(!nav)} className='px-4 cursor-pointer text-gray-200 z-10 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({link,id})=>(
                    <li key={id} className='py-4 cursor-pointer  text-3xl capitalize'>
                        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>
                        {link}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
        
            
        
    </div>
  )
}

export default NavBar