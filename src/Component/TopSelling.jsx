import React, { useEffect, useState } from 'react'
import Dresstyle from './Dresstyle';

function TopSelling() {
let [top ,settop] = useState([])

async function getItems(){

 let api = await fetch("https://dummyjson.com/products?limit=4&skip=4")

 let topdata  = await api.json();

 settop(topdata.products)

}

useEffect(()=>{
  getItems();
},[])


  return (
    <div>
      <div className='  m-16  text-center '><button className='p-2 rounded-2xl bg-gray-200'>View All</button></div>

<div className='font-serif text-center text-4xl font-bold m-8'><h1>TOP SELLING</h1></div>
<div>
  <div className='flex items-center justify-between'>
{
top.map((tp)=>(
<div>
  <img  className='bg-gray-200 rounded-2xl' src={tp.thumbnail} alt={tp.title} />
<p className='text-center font-bold '>{tp.title}</p>
<p className='text-center font-medium'>stock : {tp.stock}</p>
<div className='flex  font-medium gap-4 justify-center'>
<p className="text-center font-medium text-yellow-500">
  {"⭐".repeat(Math.floor(tp.rating))}
  <span className="text-black ml-1">({tp.rating})</span>
</p>
<p className='bg-sky-300 rounded-2xl p-1 w-12'>{tp.discountPercentage}</p>
</div>

</div>
))

}
</div>
</div>

<Dresstyle/>
    </div>
  )
}

export default TopSelling
