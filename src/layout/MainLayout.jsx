import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"
import {Outlet} from "react-router-dom";
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
  return (
    <>
       <main className="h-screen flex flex-col">
   <Navbar/>
    <div className="flex flex-grow overflow-hidden">
 
   <Sidebar/>
    <div className="flex-grow overflow-y-auto px-4 py-4">
   <Outlet/>

   <Toaster position= "top-middle"/>
   </div>
   </div>
   </main>
 

   </>
  )
}

export default MainLayout