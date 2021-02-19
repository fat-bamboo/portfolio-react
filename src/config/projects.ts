import substats from '../assets/substats.png'
import onedriveCfIndex from '../assets/onedrive-cf-index.png'
import dowww from '../assets/dowww.png'
import bithesis from '../assets/bithesis.png'
import vscodeMathToImage from '../assets/vscode-math-to-image.png'

export interface ProjectProps {
  name: string
  link: string
  description: string
  backgroundImage: string
}

export const projects: ProjectProps[] = [
  {
    name: 'Substats',
    link: 'https://github.com/spencerwooo/substats',
    description: 'spencerwooo/substats',
    backgroundImage: substats,
  },
  {
    name: 'onedrive-cf-index',
    link: 'https://github.com/spencerwooo/onedrive-cf-index',
    description: 'spencerwooo/onedrive-cf-index',
    backgroundImage: onedriveCfIndex,
  },
  {
    name: 'dowww',
    link: 'https://github.com/spencerwooo/dowww',
    description: 'spencerwooo/dowww',
    backgroundImage: dowww,
  },
  {
    name: 'BIThesis',
    link: 'https://github.com/BITNP/BIThesis',
    description: 'BITNP/BIThesis',
    backgroundImage: bithesis,
  },
  {
    name: 'vscode-math-to-image',
    link: 'https://github.com/TeamMeow/vscode-math-to-image',
    description: 'TeamMeow/vscode-math-to-image',
    backgroundImage: vscodeMathToImage,
  },
]
