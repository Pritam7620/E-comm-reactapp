import React from 'react'
import casual from './Casual.png'
import formal from "./Formal.png"
import gym from "./gym.png"
import party from './Party.png'

function Dresstyle() {
  return (
    <div className="bg-gray-200 p-10 rounded-3xl mt-24">

      {/* Heading */}
      <div className='text-center font-bold font-serif text-4xl mb-10'>
        <h1>BROWSE BY DRESS STYLE</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6 auto-rows-[160px]">

        {/* Casual */}
        <div className="rounded-2xl overflow-hidden bg-gray-100" >
          <img
            src={casual}
            alt="casual"
            className="w-full h-96 "
          />
        </div>

        {/* Formal */}
        <div className="rounded-2xl overflow-hidden bg-gray-100">
          <img
            src={formal}
            alt="formal"
            className="w-full h-96"
          />
        </div>

        {/* Party (BIG LEFT) */}
        <div className="rounded-2xl overflow-hidden row-span-2 bg-gray-100">
          <img
            src={party}
            alt="party"
            className="w-full h-96 "
          />
        </div>

        {/* Gym */}
        <div className="rounded-2xl overflow-hidden bg-gray-100 h-56">
          <img
            src={gym}
            alt="gym"
            className="w-full h-full "
          />
        </div>

      </div>

    </div>
  )
}

export default Dresstyle