import React from 'react'
import avatar from '../assets/avatar.png'
import wave from '../assets/wave.png'

const Home = () => {
  return (
    <div className="lg:pl-2 flex flex-col">
      <div>
        <img className="w-18 h-18 shadow-lg rounded-full" src={avatar} alt="avatar" />
        <div className="mt-8 text-2xl font-bold flex">
          <img className="w-8 h-8 mr-2 wave" src={wave} alt="wave" />
          <div>Spencer Woo</div>
        </div>
      </div>

      <div className="leading-relaxed mt-12">
        Postgrad at the{' '}
        <a
          className="text-blue-700 hover:text-blue-500 dark:text-blue-500 hover:dark:text-blue-300"
          href="https://www.gla.ac.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Glasgow
        </a>
        . Alumni of the{' '}
        <a
          className="text-green-700 hover:text-green-500 dark:text-green-500 dark:hover:text-green-400"
          href="http://www.bit.edu.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beijing Institute of Technology
        </a>
        . Senior author at{' '}
        <a
          className="text-red-700 hover:text-red-500 dark:text-gred-500 dark:hover:text-red-400"
          href="https://sspai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          SSPAI
        </a>
        . <span className="font-bold">A dude</span>.
      </div>

      <div className="leading-relaxed mt-2">
        Python is tasty. JavaScript is juicy. TypeScript is toothsome. PyTorch is creamy. Vue is yummy. Happen to know
        some React now. Java / C++ / Go, Express / SQL ... maybe? Still a long way to full-stack or data scientist.
      </div>
      <div className="leading-relaxed mt-2">
        Projects, a few. Publications, let's hope there will be one on its way. Research assistant, once. Work
        experience, none. Open source? Yup, yup! (Paimon noises)
      </div>
      <div className="leading-relaxed mt-2">Decent sense of aesthetic. Hope that won't disappoint you.</div>
      <div className="leading-relaxed mt-2">Cheers. Obviously that's how people greet each other in Scotland ;)</div>

      <div className="leading-relaxed mt-12 flex space-x-3">
        <a
          href="https://github.com/spencerwooo"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 border-b-2 border-black hover:text-gray-600 dark:border-white dark:hover:text-gray-400"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/realSpencerWoo"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 border-b-2 border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Twitter
        </a>
        <a
          href="https://weibo.com/spencerwoo"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 border-b-2 border-yellow-500 hover:text-yellow-600"
        >
          Weibo
        </a>
        <a
          href="https://blog.spencerwoo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 border-b-2 border-purple-500 hover:text-purple-600"
        >
          Blog
        </a>
        <a
          href="https://sspai.com/u/spencerwoo/posts"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 border-b-2 border-red-500 hover:text-red-600"
        >
          SSPAI
        </a>
      </div>
    </div>
  )
}

export default Home
