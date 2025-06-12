import React from 'react'

const Card = (anime) => {
  return (

     <div className = "bg-red-500 box flex flex-col">
                {/* <div className ="image ">
                  <img src={anime.image} alt="image"/>
    
                </div> */}
    
                <span>{anime.title.substring(0,50)+"..."}</span>
                
                <div className = "flex flex-row">
    
                  <span>{anime.type}</span>
                  <div>{anime.dateOfAiring}</div>
                  <div>{anime.totalEdivisodes}</div>
                  <div>
                    <IoStarOutline />
                    {anime.score}
                  </div>
    
    
                </div>
                
            </div>
    
  )
}

export default Card