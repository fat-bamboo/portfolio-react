import { ShareOutline } from 'heroicons-react'
import React from 'react'
import SocialCard from '../components/SocialCard'
import { socials } from '../config/socials'

const socialCards = socials.map(s => (
  <SocialCard key={s.name} name={s.name} link={s.name} icon={s.icon} apiUrl={s.apiUrl} color={s.color} />
))

const Social = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <ShareOutline size={28} className="mr-4" />
        <div>Social</div>
      </div>

      <div className="mt-12 flex flex-wrap -m-1">{socialCards}</div>

      <div className="mt-4">Kind of a quiet guy on the internet now. Cheers.</div>
      <div className="mt-2">
        Oh, and these awesome statistics are powered by{' '}
        <a
          href="https://github.com/spencerwooo/substats"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 bg-yellow-50 hover:text-yellow-600"
        >
          Substats.
        </a>{' '}
        Which you should definitely take a look.
      </div>
    </div>
  )
}

export default Social
