import { Rss, Github, Props, Telegram, Twitter, Sinaweibo, Steam, Medium } from '@icons-pack/react-simple-icons'
import { FC } from 'react'

export interface SocialProps {
  name: string
  link: string
  icon: FC<Props> | null
  apiUrl: string
  color: string
}

export const socials: SocialProps[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/spencerwooo',
    icon: Github,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=github&queryKey=spencerwooo',
    color: '#2188ff',
  },
  {
    name: 'RSS',
    link: 'https://blog.spencerwoo.com/',
    icon: Rss,
    apiUrl:
      'https://api.spencerwoo.com/substats/?source=feedly|inoreader&queryKey=https%3A%2F%2Fblog.spencerwoo.com%2Fposts%2Findex.xml',
    color: '#FFA500',
  },
  {
    name: 'Telegram',
    link: 'https://t.me/realSpencerWoo',
    icon: Telegram,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=telegram&queryKey=realSpencerWoo',
    color: '#2CA5E0',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/realSpencerWoo',
    icon: Twitter,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=twitter&queryKey=realSpencerWoo',
    color: '#1da1f2',
  },
  {
    name: 'Weibo',
    link: 'https://weibo.com/spencerwoo',
    icon: Sinaweibo,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=weibo&queryKey=2867502440',
    color: '#e71f19',
  },
  {
    name: 'Steam Games',
    link: 'https://steamcommunity.com/id/firebearllc',
    icon: Steam,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=steamGames&queryKey=76561198336249957',
    color: '#134375',
  },
  {
    name: 'Steam Friends',
    link: 'https://steamcommunity.com/id/firebearllc',
    icon: Steam,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=steamFriends&queryKey=76561198336249957',
    color: '#134375',
  },
  {
    name: 'Medium',
    link: 'https://api.spencerwoo.com/substats/?source=medium&queryKey=%40SpencerWooo',
    icon: Medium,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=medium&queryKey=%40SpencerWooo',
    color: '#00a669',
  },
  {
    name: 'SSPAI',
    link: 'https://sspai.com/u/spencerwoo/posts',
    icon: null,
    apiUrl: 'https://api.spencerwoo.com/substats/?source=sspai&queryKey=spencerwoo',
    color: '#d71a1b',
  },
]
