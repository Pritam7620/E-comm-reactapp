import React, { useState, useEffect } from 'react';
import TopSelling from './TopSelling';
import { useNavigate } from 'react-router-dom';

function NewArrival() {
   let navi = useNavigate()
  let [prod , setproduct] = useState([])

 async function getProduct(){

  let res = await fetch("https://dummyjson.com/products?limit=4")
  let data = await res.json();

setproduct(data.products)

 }

 useEffect(()=>{
  getProduct();
 },[])
   
  return (
<>
<div id='newarrival' className='text-center text-4xl font-bold font-serif m-10'>
  <h1 className='font-serif'>NEW ARRIVALS</h1>
</div>

<div className='flex items-center justify-between'>
    
    {
      prod.map((pr , key)=>(


<div key={key}>
  <img    onClick={() => navi(`/ProductDetails/${pr.id}`)} className='bg-gray-200 rounded-2xl' src={pr.thumbnail} alt={pr.title} />
<p className='text-center font-bold '>{pr.title}</p>
<p className='text-center font-medium'>stock : {pr.stock}</p>
<div className='flex  font-medium gap-4 justify-center text-center'>
<p className="text-center font-medium text-yellow-500 mt-1">
  {"⭐".repeat(Math.floor(pr.rating))}
  <span className="text-black ml-1">({pr.rating})</span>
</p>
<p className='bg-green-400 rounded-2xl p-1 w-14'>{pr.discountPercentage}%</p>

</div>
<p className='text-center font-bold p-4'>Price : ${pr.price}</p>

</div>

      ))
    }
    </div>
   
    </>
    
    
  );
}

export default NewArrival;