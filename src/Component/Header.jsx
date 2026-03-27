import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from './HeroSection'

function Header() {
  return (
    <div>
      <div className='flex bg-black text-white justify-between h-10 items-center px-9'>
  
  <p className='text-center flex-1'>
    sign up & get 20% off to your first order. 
    <span className='border-b-2 ml-1'>Sign Up Now</span>
  </p>

  <i className="fa-solid fa-xmark cursor-pointer"></i>

</div>

{/*------------------next head-----------------*/}
<div className='h-14 bg-amber-300 flex justify-between items-center pl-14 pr-14'>
  <div className='flex gap-10'>
    <div>Shop.co</div>
    <p>Shop <i className="fa-solid fa-angle-down"></i></p>
    <p>OnSale</p>
    <Link to="/NewArrival">NewArrival</Link>
    <p>brands</p>
  </div>
  <div className='flex gap-8'>

<input className='bg-sky-200 w-96 rounded-2xl ' type="text" placeholder=' Search for Products.....' />
<i className="fa-solid fa-cart-shopping"></i>
<Link to="/Login" ><i className="fa-regular fa-circle-user"></i></Link>
  </div>
</div>
<HeroSection></HeroSection>
    </div>



  )
}

export default Header
