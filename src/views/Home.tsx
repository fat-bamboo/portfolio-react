import React from 'react'
import avatar from '../assets/avatar.png'
import wave from '../assets/wave.png'

function Home() {
  return (
    <div className="pl-2">
      <div className="flex justify-between items-center mt-6">
        <div className="text-2xl font-bold flex">
          <img className="w-8 h-8 mr-2 wave" src={wave} alt="wave" />
          <div>Spencer Woo</div>
        </div>
        <img className="w-18 h-18 shadow-lg rounded-full" src={avatar} alt="avatar" />
      </div>

      <p>Hello from tailwindcss</p>
    </div>
  )
}

export default Home
