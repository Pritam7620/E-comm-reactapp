import React, { useEffect, useState } from 'react'

function Casual() {

  let [items , setitems] = useState([])

async function Casuals(){
   let res = await fetch("https://dummyjson.com/products/category/mens-shirts")
let data = await res.json();

setitems(data.products)

}


useEffect(()=>{

  Casuals();
},[])


  return (
    <div>
      <div>
         <div className='flex justify-between  ml-60 mr-40 mt-12' >
<p className='font-bold text-2xl'>Casual</p>
<p>showing 1-10 of 100 products</p>

         </div>

         <div className='flex justify-center items-center'>
          {
            items.map((it,i)=>(
            <div key={i}>
  <img   src={it.thumbnail} alt={it.title} />
<p className='text-center font-bold '>{it.title}</p>
<p className='text-center font-medium'>stock : {it.stock}</p>
<div className='flex  font-medium gap-4 justify-center'>
<p className="text-center font-medium text-yellow-500">
  {"⭐".repeat(Math.floor(it.rating))}
  <span className="text-black ml-1">({it.rating})</span>
</p>
<p className='bg-sky-300 rounded-2xl p-1 w-12'>{it.discountPercentage}</p>

</div>

</div>

            ))

          }
         </div>
      </div>
    </div>
  )
}

export default Casual
