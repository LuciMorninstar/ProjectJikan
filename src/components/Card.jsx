import React from 'react'
import { IoStarOutline } from 'react-icons/io5'

const Card = ({anime}) => {
  return (

     <div className = "group relative  w-full h-max flex flex-col justify-center items-center rounded-md gap-2 py-2 transition-all duration-700 ease-in-out cursor-pointer before:content-['+'] before:absolute before:top-5 before:right-4 before:w-8 before:h-8 before:z-10 before:bg-black before:text-center before:rounded-sm before:text-xl before:font-bold before:text-white ">
                <div className =" group-hover:translate-y-[-7px] image ">
                  <img className = "h-full object-cover " src={anime.image} alt="image"/>
    
                </div>  
    
                <span className = "relative text-white font-semibold before:content-[''] before:absolute before:bg-green-500 before:w-2.5 before:h-2.5 before:rounded-full  before:top-2 before:-left-4" >{anime.title}</span>
                
                <div className = "flex flex-row gap-2 ">
    
                  <span className = " border-1 border-gray-500 px-1.5 py-0.5 rounded-sm text-sm font-bold text-gray-500 hover:text-white">{anime.type}</span>
                  <div className = " border-1 border-gray-500 px-1.5 py-0.5 rounded-sm text-sm font-bold text-gray-500 hover:text-white">{anime.dateOfAiring.slice(0,4)}</div>
                  <div className = " border-1 border-gray-500 px-1.5 py-0.5 rounded-sm text-sm font-bold text-gray-500 hover:text-white">{anime.totalEpisodes}</div>
                  <div className = "flex flex-row items-center justify-center gap-1 border-1 border-gray-500 px-1.5 py-0.5 rounded-sm text-sm font-bold text-gray-500 hover:text-white">
                    <IoStarOutline />
                    {anime.score}
                  </div>
    
    
                </div>
                
            </div>
    
  )
}

export default Card