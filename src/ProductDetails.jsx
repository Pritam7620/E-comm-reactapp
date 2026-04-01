import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Component/Header';
import Youlike from './Component/Youlike';


function ProductDetails() {
let [count , setcount] = useState(0)


 let {Productid} = useParams()

let [produc , setproduct] =  useState({})


function decrese(){

  if(count>0){
    setcount(count - 1)
  }
}

function increse(){
setcount(count + 1 )

}

async function Productinfo(){
     let res  = await fetch(`https://dummyjson.com/products/${Productid}`);
     let datas = await res.json();

setproduct(datas)
}


useEffect(()=>{
Productinfo();

},[Productid])

  return (

   <div>
  <Header />

  <div className="flex gap-16 p-10 justify-between ml-40 mr-28">

   
    <div className="bg-gray-100 rounded-2xl p-6">
      <img
        className="w-[350px] object-contain"
        src={produc.thumbnail}
        alt={produc.title}
      />
    </div>

   
    <div className="max-w-lg">

      {/* TITLE */}
      <h1 className="text-3xl font-extrabold uppercase">
        {produc.title}
      </h1>

      {/* RATING */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500 text-lg">
          {"⭐".repeat(Math.floor(produc.rating || 0))}
        </span>
        <span className="text-gray-600">
          {produc.rating}/5
        </span>
      </div>

      {/* PRICE */}
      <div className="flex items-center gap-4 mt-3">
        <p className="text-2xl font-bold">
          ${produc.price}
        </p>
        <p className="line-through text-gray-400">
          ${Math.floor(produc.price * 1.2)}
        </p>
        <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-sm">
          -{Math.floor(produc.discountPercentage)}%
        </span>
      </div>

     
      <p className="text-gray-500 mt-3">
        {produc.description}
      </p>

      <hr className="my-5" />

     
      <div>
        <p className="font-medium mb-2">Select Colors</p>
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-green-900 border-2 border-black"></div>
          <div className="w-6 h-6 rounded-full bg-green-700"></div>
          <div className="w-6 h-6 rounded-full bg-blue-900"></div>
        </div>
      </div>

      <hr className="my-5" />

     
      <div>
        <p className="font-medium mb-2">Size</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-200 rounded-full"> Width: {produc.dimensions?.width}</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full">Height: {produc.dimensions?.height}</button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded-full">Depth: {produc.dimensions?.depth}</button>
          
        </div>
      </div>

      <hr className="my-5" />

     
      <div className="flex items-center gap-4">
        
      
        <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full">
          <button className='text-4xl' onClick={decrese}>-</button>
          <span className='text-2xl'>{count}</span>
          <button className='text-4xl' onClick={increse}>+</button>
        </div>

      
        <button className="bg-black text-white px-10 py-3 rounded-full w-full">
          Add to Cart
        </button>
      </div>

    </div>
  </div>
  <Youlike/>
</div>
  )
}

export default ProductDetails
