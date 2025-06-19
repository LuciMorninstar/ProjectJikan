import React from 'react'
import { BsBadgeCcFill } from 'react-icons/bs'
import { IoStarOutline } from 'react-icons/io5'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Card = ({anime}) => {

  useGSAP(()=>{
    gsap.to("#img",
 
    {
     x:20,
     yoyo:true,
     repeat:-1,
     duration:4,
    //  scale:1.2
   
    

    }
  )

  },[])
  return (

     <div id="card" className = "group relative  w-full h-max flex flex-col justify-center items-center rounded-md gap-2 py-2 transition-all duration-700 ease-in-out cursor-pointer before:content-['+'] before:absolute before:top-5 before:right-6 before:w-8 before:h-8 before:z-10 before:bg-black before:text-center before:rounded-sm before:text-xl before:font-bold before:text-white ">
                <div id="img" className ="h-99  group-hover:translate-y-[-7px] image ">
                  <img className = "h-full object-cover " src={anime.images.jpg.large_image_url} alt="image"/>
    
                </div>  
    
                <span className = "relative text-white font-semibold before:content-[''] before:absolute before:bg-green-500 before:w-2.5 before:h-2.5 before:rounded-full  before:top-2 before:-left-4" >{anime.title.slice(0,29)+" ..."}</span>
                
                <div className = "flex flex-row gap-2 ">
    
                  <span className = " border-1 border-gray-500 px-1.5 py-0.5 rounded-sm text-sm font-bold text-gray-500 hover:text-white">{anime.type}</span>
                  <div className = " border-1 border-gray-500 px-1.5 py-0.5 rounded-sm text-sm font-bold text-gray-500 hover:text-white">{anime.aired.from.slice(0,4)}</div>
                  <div className = " border-1 border-gray-500 px-1.5 py-0.5 rounded-sm text-sm font-bold text-gray-500 hover:text-white">
                    <div className = "flex flex-row items-center justify-center gap-1">
                    <BsBadgeCcFill />
                    {anime.episodes}
                    </div>
                  </div>
                  <div className = "flex flex-row items-center justify-center gap-1 border-1 border-gray-500 px-1.5 py-0.5 rounded-sm text-sm font-bold text-gray-500 hover:text-white">
                    <IoStarOutline />
                    {anime.score}
                  </div>
    
    
                </div>
                
            </div>
    
  )
}

export default Card