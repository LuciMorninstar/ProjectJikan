import React from 'react'

import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import About from './pages/About'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<MainLayout/>}>

        <Route index element={<HomePage/>}/>
        <Route path = "/about" element={<About/>}/>


      </Route>
    )
  )
  return (

    <RouterProvider router = {router}/>


  )
}

export default App