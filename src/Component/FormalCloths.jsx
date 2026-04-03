
import React, { useEffect, useState } from 'react'

function FormalCloths() {
   let [prod , setprod] =useState([])

   async function FormalProd(){
  let res1 = await fetch("https://dummyjson.com/products/category/mens-shirts?limit=4")
let data1 = await res1.json();

let res2 = await fetch("https://dummyjson.com/products/category/womens-dresses?limit=4");
let data2 = await res2.json();

setprod([...data1.products , ...data2.products])
    

  }

  useEffect(()=>{
FormalProd();

  },[])

  return (
     <div>
      <div>
         <div className='flex justify-between  ml-60 mr-50 mt-12 mb-8' >
<p className='font-bold text-2xl'>Casual</p>
<p>showing 1-10 of 100 products</p>

         </div>

         <div className='flex justify-center items-center flex-wrap mr-28 gap-5 p-8 ml-1'>
          {
            prod.map((pp,i)=>(
            <div key={i} >
  <img className='p-2'  src={pp.thumbnail} alt={pp.title} />
<p className='text-center font-bold '>{pp.title}</p>
<p className='text-center font-medium'>stock : {pp.stock}</p>
<div className='flex  font-medium gap-4 justify-center'>
<p className="text-center font-medium text-yellow-500">
  {"⭐".repeat(Math.floor(pp.rating))}
  <span className="text-black ml-1">({pp.rating})</span>
</p>
<p className='bg-sky-300 rounded-2xl p-1 w-12'>{pp.discountPercentage}</p>


</div>
<div  className='text-center font-bold text-1xl'>
  <p> price : ${pp.price}</p>
 
</div>
</div>

            ))

          }
         </div>
      </div>
    </div>
  )
}

export default FormalCloths
