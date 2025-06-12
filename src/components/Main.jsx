import React from 'react'
import { IoStarOutline } from 'react-icons/io5'
import Card from "./Card";
import {useState, useEffect} from "react";



const Main = () => {

const [animelist, setAnimeList] = useState([]);
const [isLoading, setIsLoading] = useState(false);


useEffect(()=>{
  const fetch = async ()=>{
    const response = await fetch ("https://api.jikan.moe/v4/top/anime");
    const data = await response.json();
    console.log(data);

  }

  fetch();
},[])
  
  return (

    <>
    <section className = "bg-green-500w-full h-max grid grid-cols-3  lg:grid-cols-5 gap-5 ">

  {
    
      animeList.map((anime,index)=>(
        <Card key ={index} anime = {anime}/>
        
      ))
   
  }
   </section>

    </>

  
    
  )
}

export default Main