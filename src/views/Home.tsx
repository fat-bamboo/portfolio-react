import React from 'react'
import avatar from '../assets/avatar.png'
import wave from '../assets/wave.png'

function Home() {
  return (
    <div>
      <div className="flex justify-between mt-6">
        <div className="mt-6 text-2xl font-bold flex">
          <img className="w-8 h-8 mr-2 wave" src={wave} alt="wave" />
          <div>Spencer Woo</div>
        </div>
        <img className="w-20 h-20 shadow-xl rounded-full" src={avatar} alt="avatar" />
      </div>

      <p>Hello from tailwindcss</p>
    </div>
  )
}

export default Home
