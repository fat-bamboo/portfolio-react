import { ShareIcon } from '@heroicons/react/outline'
import React from 'react'
import SocialCard from '../components/SocialCard'
import { socials } from '../config/socials'

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
      <img className="mt-4 rounded" src="https://genshin-card.getloli.com/39/272133020.png" alt="Genshin Impact Card" />
      <div className="mt-4">HuTao Supremacy!</div>
      <div className="mt-2">
        Oh, and these awesome statistics are powered by{' '}
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
    </div>
  )
}

export default Social
