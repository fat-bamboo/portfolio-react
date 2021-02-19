import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SocialProps } from '../config/socials'

const SocialCard = (props: SocialProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [stat, setStat] = useState(0)

  useEffect(() => {
    axios
      .get(props.apiUrl)
      .then(
        ({
          data: {
            data: { totalSubs },
          },
        }) => {
          setStat(totalSubs)
          setIsLoading(false)
        }
      )
      .catch(err => {
        console.error(err)
        setIsLoading(false)
      })
  }, [])

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" className="rounded inline-block m-1">
      <div className="flex items-center space-x-2 rounded border-2 pl-2" style={{ borderColor: `${props.color}` }}>
        {props.icon && <props.icon color={props.color} size={20} />}
        <div>{props.name}</div>
        <div
          className="flex justify-center font-bold text-white py-1 w-12 min-w-min"
          style={{ backgroundColor: `${props.color}` }}
        >
          {isLoading ? <span>...</span> : <span>{stat}</span>}
        </div>
      </div>
    </a>
  )
}

export default SocialCard
