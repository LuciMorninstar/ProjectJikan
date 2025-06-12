import React from 'react'
import logo from "/logo-anime.png"
import { BiSearch } from 'react-icons/bi'
import { FaInbox, FaRegUserCircle, FaUserCircle } from 'react-icons/fa'
import { FiCommand } from 'react-icons/fi'
import { TfiControlShuffle } from 'react-icons/tfi'
import {useState} from "react";


const Navbar = () => {

    const [toggleSearch, setToggleSearch] = useState(false);


    const togglesearchbar = ()=>{
        setToggleSearch((prev)=>!prev);
        console.log(toggleSearch);


    }

  return (
    <>
  <nav className = "w-full bg-[#080808fd] flex flex-row justify-between items-center px-1 border border-b-gray-800">
    
    <div className = "w-18 h-18"> 
       <a href="#"><img className = "h-full w-full" src={logo} alt="logo"></img></a> 
    </div>



<div className= "flex flex-row gap-2">

    <div className = " flex flex-row relative hidden md:block   ">
        
    <BiSearch className = " absolute top-1 left-2 w-9 h-9 p-2 text-white  "/>
    <input className = "bg-blue-300-500 w-[450px] h-[40px] px-9 bg-[#141414] border border-gray-700 rounded-sm outline-none text-gray-100 text-sm caret-gray-200 " type="text" placeholder = "Search Anime" />
    <FiCommand className = " absolute top-1 right-2 w-9 h-9 p-2 text-white  "/>

  </div>
      <BiSearch className = "hidden md:block w-10 h-10 p-2 text-white bg-[#141414] border border-gray-700 rounded-sm cursor-pointer "/>
      <TfiControlShuffle  className = " hidden md:block w-10 h-10 p-2 text-white bg-[#141414] border border-gray-700 rounded-sm cursor-pointer  "/>





  </div>
  

    


    <div className = "flex flex-row gap-2 ">

   <BiSearch onClick = {()=> togglesearchbar()} className = "md:hidden w-10 h-10 p-2 text-white rounded-sm bg-[#141414] border border-gray-700 cursor-pointer" /> 
    <FaInbox className = " w-10 h-10 p-2 text-white rounded-sm bg-[#141414] border border-gray-700 cursor-pointer"/>
    <FaRegUserCircle className = " w-10 h-10 p-2 text-white rounded-sm bg-[#141414] border border-gray-700 cursor-pointer" />
    </div>





  </nav>

  {/* responsive for mobile */}

   {toggleSearch &&

  <div className = "w-full bg-[#080808fd] flex  flex-row px-1 items-center justify-between relative md:hidden translate-y duration-100 transition-all pb-3 ">

   
    <BiSearch className = " absolute w-9 h-9 p-2 text-white cursor-pointer "/>
    <input className = "bg-blue-300-500 w-full h-[40px] px-9 border border-gray-700 rounded-sm outline-none text-gray-100 text-sm caret-gray-200 " type="text" placeholder = "Search Anime" />
    
 
  </div>
}

  
  </>
  )
}

export default Navbar