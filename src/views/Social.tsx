import { ShareIcon } from '@heroicons/react/outline'
import React from 'react'
import SocialCard from '../components/SocialCard'
import { socials } from '../config/socials'

import teyvatBackground from '../assets/teyvat-screenshot.png'
import genshinBackground from '../assets/genshin-screenshot.png'

const socialCards = socials.map(s => (
  <SocialCard key={s.name} name={s.name} link={s.link} icon={s.icon} apiUrl={s.apiUrl} color={s.color} />
))

const Social = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <ShareIcon className="mr-4 w-5 h-5" />
        <div>Social</div>
      </div>

      <div className="mt-12 flex flex-wrap -m-1">{socialCards}</div>

      <div className="mt-4 text-gray-400">
        * These awesome statistics are powered by{' '}
        <a
          href="https://github.com/spencerwooo/substats"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-400 dark:text-yellow-400 dark:hover:text-yellow-300"
        >
          Substats
        </a>
        , which you should definitely take a look.
      </div>

      <div className="mt-12">
        <div className="text-xl font-bold">Genshin Impact</div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded shadow relative transition transform hover:shadow-md hover:-translate-y-1 overflow-hidden">
            <a href="https://teyvat.spencerwoo.com" target="_blank" rel="noopener noreferrer">
              <img className="absolute top-0 left-0 right-0 z-0" src={teyvatBackground} alt="background" />
              <div className="relative z-10 bg-white dark:bg-gray-800 mt-60 p-4 border-t-2 border-gray-200">
                <div className="text-xl">Teyvat Life</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Notion page that keeps a record of my journeys in Teyvat.
                </div>
              </div>
            </a>
          </div>

          <div className="rounded shadow relative transition transform hover:shadow-md hover:-translate-y-1 overflow-hidden">
            <a
              href="https://genshin.spencerwoo.com/168305666?server=cn_gf01&schedule=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="absolute top-0 left-0 right-0 z-0" src={genshinBackground} alt="background" />
              <div className="relative z-10 bg-white dark:bg-gray-800 mt-60 p-4 border-t-2 border-gray-200">
                <div className="text-xl">Genshin Impact Player Info</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Queries 米游社 for detailed player info in Genshin Impact.
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social
