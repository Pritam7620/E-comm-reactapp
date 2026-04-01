import React, { useEffect, useState } from 'react'
import Stayuptodate from './Stayuptodate';

function Youlike() {

let [like , setlike]  = useState([])

  async function youmightlike(){

   let res  = await fetch("https://dummyjson.com/products?limit=4&skip=8")

   let data = await res.json();

   setlike(data.products)
  }

useEffect(()=>{

  youmightlike();

},[])

  return (
    <div>
      <div className='mt-36 text-4xl'>
 <h1 className='text-center font-bold text-black'>YOU MIGHT ALSO LIKE</h1>
      </div>
      
      <div className='flex justify-between mt-12 text-center'>
       
      {
       like.map((prod , i)=>(

  <div key={i}>
    <img src={prod.thumbnail} alt={prod.title} />

    <p className='mb-4 font-bold'>{prod.title}</p>
    <div className='flex  font-medium gap-4 justify-center'>
<p className="text-center font-medium text-yellow-500">
  {"⭐".repeat(Math.floor(prod.rating))}
  <span className="text-black ml-1">({prod.rating})</span>
</p>
<p className='bg-sky-300 rounded-2xl p-1 w-17'>{prod.discountPercentage}%</p>

</div>
<p className='font-bold mt-3 mb-3 text-2xl'>${prod.price}</p>
  </div>

       ))

      }
      <div>
         
    
       
      </div>
</div>
<Stayuptodate/>
    </div>
  )
}

export default Youlike
