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
import Casual from './Component/Casual'
import Stayuptodate from './Component/Stayuptodate'
import FormalCloths from './Component/FormalCloths'
import TopSelling from './Component/TopSelling'



function App() {

  return (
    <>
  
      <BrowserRouter>
  
      <Routes>

        <Route path='/' element={  <><Header/> <HeroSection/><NewArrival/><TopSelling/></>}></Route>
        <Route path='/NewArrival' element={<><Header/><NewArrival/></>} ></Route>
        <Route path='/HeroSection' element={<HeroSection/>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
<Route path='/ProductDetails/:Productid' element= {<ProductDetails/>} ></Route>
<Route path='/youlike' element={<Youlike></Youlike>}></Route>

<Route path='/casual' element={ <> <Header></Header><Casual></Casual><Stayuptodate></Stayuptodate> </> }></Route>
<Route path='/Formal' element={<><Header/><FormalCloths/><Stayuptodate/></>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
