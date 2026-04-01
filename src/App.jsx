import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Header'
import NewArrival from './Component/NewArrival'
import HeroSection from './Component/HeroSection'
import Login from './Component/Login'
import ProductDetails from './ProductDetails'
import Youlike from './Component/Youlike'



function App() {

  return (
    <>
  
      <BrowserRouter>
  
      <Routes>

        
        <Route path='/' element={  <><Header/> <HeroSection/></>}></Route>
        <Route path='/NewArrival' element={<NewArrival/>} ></Route>
        <Route path='/HeroSection' element={<HeroSection/>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
<Route path='/ProductDetails/:Productid' element= {<ProductDetails/>} ></Route>
<Route path='/youlike' element={<Youlike></Youlike>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
