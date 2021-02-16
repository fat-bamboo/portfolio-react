import React from 'react'
import avatar from '../assets/avatar.png'

function Home() {
  return (
    <div>
      <div className="mt-16 text-center">
        <img className="mx-auto shadow-xl rounded-full" src={avatar} alt="avatar" />
        <div className="mt-6 text-xl font-bold">Spencer Woo</div>
        <div></div>
      </div>
      <p>Hello from tailwindcss</p>
    </div>
  )
}

export default Home
