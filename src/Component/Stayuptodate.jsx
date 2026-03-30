import React from 'react'
import Footer from './Footer'

function Stayuptodate() {

  return (
    <div>
      <div className=' flex justify-between bg-black text-white p-10 rounded-3xl mt-16'>

<div className='ml-14 font-bold  text-5xl'><p>STAY UPTO DATE ABOUT <br />OVER LATEST OFFERS</p> </div>
<div className='flex flex-col'>
   <input className='bg-sky-100 p-2.5 rounded-2xl  text-black placeholder:text-black mb-4' type="text" placeholder='📭 enter email here ' ></input>
<button className='bg-sky-100 text-black rounded-2xl p-2.5  hover:bg-emerald-900  hover:text-white'>subscribe to newslettes</button>
</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Stayuptodate
