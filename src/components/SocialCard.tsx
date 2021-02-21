import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { SocialProps } from '../config/socials'

const SocialCard = (props: SocialProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [stat, setStat] = useState(0)
  const nodeRef = useRef(null)

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
          className="flex justify-center items-center font-bold text-white py-1 w-12 min-w-min h-8"
          style={{ backgroundColor: `${props.color}` }}
        >
          <SwitchTransition>
            <CSSTransition
              key={isLoading ? 'loading' : 'loaded'}
              timeout={200}
              classNames="fade"
              nodeRef={nodeRef}
              unmountOnExit
            >
              {isLoading ? <span ref={nodeRef} className="dot-flashing"></span> : <span ref={nodeRef}>{stat}</span>}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </a>
  )
}

export default SocialCard
