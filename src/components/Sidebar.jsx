import React from 'react'
import { RiHomeSmileFill } from 'react-icons/ri'
import { IoSettingsOutline } from "react-icons/io5";
import { FaFireFlameCurved } from 'react-icons/fa6';

import { FaUserCircle } from "react-icons/fa";

import { NavLink } from 'react-router-dom';






const Sidebar = () => {





  
  

  const sidebaritems = 

  [
    {
      icon: <RiHomeSmileFill/>,
      title:"Home"
    },
    {
      icon: <FaFireFlameCurved/>,
      title:"Trending"
    },
  
    {
      icon: <FaUserCircle />,
      title:"Profile"
    },
 
    {
      icon: <IoSettingsOutline />,
      title:"Settings"
    }
  ]


  return (

    <>

    
 
    <section className = "hidden sm:flex sm:flex-col sm:border sm:border-r-gray-800 ">

      {

     sidebaritems.map((item)=>(

      

       <div key={item.icon} className = "group w-full h-max flex flex-col items-center justify-center gap-1 p-3 transition-all duration-75 ease-in-out hover:bg-blue-200 rounded-md active:bg-blue-200">
            <div className = " group-hover:text-[#3e44fe] active:text-[#3e44fe] text-white text-2xl">{item.icon}</div>
            <span className = "group-hover:text-[#3e44fe] active:text-[#3e44fe] text-white text-sm">{item.title}</span>
          </div>

     )) 
        
      }

    </section>



    <section className = "sm:hidden absolute bottom-0 bg-[#080808fd] w-full flex flex-row items-end full justify-end border-2 border-r-gray-800  ">

      {

     sidebaritems.map((item)=>(

      

       <div key={item.icon} className = "group w-full h-max flex flex-col items-center justify-center gap-1 p-3 transition-all duration-75 ease-in-out hover:bg-blue-200 rounded-md active:bg-blue-200">
            <div className = " group-hover:text-[#3e44fe] active:text-[#3e44fe] text-white text-2xl">{item.icon}</div>
            <span className = "group-hover:text-[#3e44fe] active:text-[#3e44fe] text-white text-sm">{item.title}</span>
          </div>

     )) 
        
      }


    </section>


</>

  )
}

export default Sidebar