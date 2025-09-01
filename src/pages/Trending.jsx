import React from 'react'
import {useState, useEffect} from "react";

const Trending = () => {

    const [trendingAnime, setTrendingAnime] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const trendingAnimeFetch = async()=>{
            const response = await fetch ("https://api.jikan.moe/v4/anime?q=bleach");
            const data = await response.json();
            console.log(data);

        }
        
        trendingAnimeFetch(); 



    },[])


    




  return (

    <>
    <p> Trending Anime</p>
    </>
   
  )
}

export default Trending