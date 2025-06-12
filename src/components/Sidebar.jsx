import React from 'react'
import { RiHomeSmileFill } from 'react-icons/ri'
import { IoSettingsOutline } from "react-icons/io5";
import { FaFireFlameCurved } from 'react-icons/fa6';

import { FaUserCircle } from "react-icons/fa";




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
    <section className = "bg-[#080808fd] w-[75px] h-screen border-2 border-r-gray-800">

      {

     sidebaritems.map((item)=>(
  <div key={item.icon} className = "border-1 border-blue-500 w-full h-max flex flex-col items-center justify-center gap-y-1 p-3 ">
            <div className = "text-white text-2xl">{item.icon}</div>
            <span className = "text-white text-sm">{item.title}</span>
          </div>

     )) 
        
      }



   


    </section>
  )
}

export default Sidebar