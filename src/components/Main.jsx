import React from 'react'
import { IoStarOutline } from 'react-icons/io5'
import Card from "./Card";



const Main = () => {

  const animeList = [
  {
    title: "Vinland Saga",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
    dateOfAiring: "2019-07-08",
    totalEpisodes: 24,
    score: 8.72
  },
  {
    title: "Dororo",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/1451/97475.jpg",
    dateOfAiring: "2019-01-07",
    totalEpisodes: 24,
    score: 8.21
  },
  {
    title: "91 Days",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/4/80266.jpg",
    dateOfAiring: "2016-07-09",
    totalEpisodes: 12,
    score: 7.73
  },
  {
    title: "Ergo Proxy",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/11/18736.jpg",
    dateOfAiring: "2006-02-25",
    totalEpisodes: 23,
    score: 7.89
  },
  {
    title: "Ajin",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/13/77932.jpg",
    dateOfAiring: "2016-01-16",
    totalEpisodes: 13,
    score: 7.45
  },
  {
    title: "Kabaneri of the Iron Fortress",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/4/79450.jpg",
    dateOfAiring: "2016-04-08",
    totalEpisodes: 12,
    score: 7.22
  },
  {
    title: "Zankyou no Terror",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/10/64447.jpg",
    dateOfAiring: "2014-07-11",
    totalEpisodes: 11,
    score: 8.10
  },
  {
    title: "B: The Beginning",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/1970/93557.jpg",
    dateOfAiring: "2018-03-02",
    totalEpisodes: 12,
    score: 7.17
  },
  {
    title: "Garo: Honoo no Kokuin",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/8/67735.jpg",
    dateOfAiring: "2014-10-04",
    totalEpisodes: 24,
    score: 7.24
  },
  {
    title: "Seirei no Moribito",
    type: "TV",
    image: "https://cdn.myanimelist.net/images/anime/12/23866.jpg",
    dateOfAiring: "2007-04-07",
    totalEpisodes: 26,
    score: 8.14
  }
]
  
  return (

    <>
    <section className = "w-full h-max grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

  {
    
      animeList.map((anime,index)=>{
        <Card key ={index} anime = {anime}/>
        
      })
   
  }
   </section>

    </>

  
    
  )
}

export default Main