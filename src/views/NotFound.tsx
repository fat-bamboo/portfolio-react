import React from 'react'
import { Link } from 'react-router-dom'
import cat from '../assets/cat.png'

function getRandomQuote(): String {
  const quotes: String[] = [
    'Whoops, where are we.',
    "That's a four-oh-four.",
    "Seems that you're lost.",
    "Uh-oh. Here's a cat.",
  ]
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function NotFound() {
  return (
    <div className="pl-2">
      <div className="p-2 mb-4 border-l-4 border-gray-300 text-gray-400 flex">
        <img src={cat} alt="cat" className="h-6 w-6 mr-1" />
        <div>{getRandomQuote()}</div>
      </div>
      <Link className="hover:underline" to="/">
        Take me home.
      </Link>
    </div>
  )
}

export default NotFound
