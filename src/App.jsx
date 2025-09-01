import React from 'react'

import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Trending from './pages/Trending'
import SignUp from './components/SignUp'
import SignIn from './components/signIn'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<MainLayout/>}>

        <Route index element={<HomePage/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/trending" element = {<Trending/>}/>
        <Route path = "/signUp" element = {<SignUp/>}/>
        <Route path = "/signIn" element = {<SignIn/>}/>
        



    
      </Route>
      
    )
  )
  return (

    <RouterProvider router = {router}/>


  )
}

export default App