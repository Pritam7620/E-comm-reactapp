import React from 'react'
import clothslogo from './clothslogo.png';
import NewArrival from './NewArrival';

function HeroSection() {
  return (
     <section className="bg-gray-100 px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-2 items-center gap-10">
        
       
        <div className="ml-4 md:ml-10"> 
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight w-2/3">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p className="text-gray-500 mt-4 text-sm md:text-base max-w-md">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          
          <button className=" bg-black mt-6  text-white  px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition  p-11">
            Shop Now
          </button>

          <div className="flex gap-8 mt-10 text-sm">
            <div>
              <h2 className="font-bold text-lg">200+</h2>
              <p className="text-gray-500">International Brands</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">2,000+</h2>
              <p className="text-gray-500">High-Quality Products</p>
            </div>

            <div>
              <h2 className="font-bold text-lg">30,000+</h2>
              <p className="text-gray-500">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
         
<img  className="w-full max-w-md mx-auto (w-1/3)" src={clothslogo} alt="clothslogo" />
          <div className="absolute top-10 left-10 text-2xl">✦</div>
          <div className="absolute bottom-10 right-10 text-2xl">✦</div>
        </div>
      </div>

      {/* BRAND BAR */}
      <div className="bg-black text-white mt-12 py-4">
        <div className="flex justify-around text-sm md:text-lg font-semibold tracking-wide">
          <span>VERSACE</span>
          <span>ZARA</span>
          <span>GUCCI</span>
          <span>PRADA</span>
          <span>Calvin Klein</span>
        </div>
      </div>
      <NewArrival/>
    </section>
  )
}

export default HeroSection
