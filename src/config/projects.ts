import bithesis from '../assets/bithesis.png'
import dowww from '../assets/dowww.png'
import onedriveVercelIndex from '../assets/onedrive-vercel-index.png'
import substats from '../assets/substats.png'
import vscodeMathToImage from '../assets/vscode-math-to-image.png'

export interface ProjectProps {
  name: string
  link: string
  slug: string
  bimg: string
}

export const projects: ProjectProps[] = [
  {
    name: 'Substats',
    link: 'https://github.com/spencerwooo/substats',
    slug: 'spencerwooo/substats',
    bimg: substats,
  },
  {
    name: 'onedrive-vercel-index',
    link: 'https://github.com/spencerwooo/onedrive-vercel-index',
    slug: 'spencerwooo/onedrive-vercel-index',
    bimg: onedriveVercelIndex,
  },
  {
    name: 'dowww',
    link: 'https://github.com/spencerwooo/dowww',
    slug: 'spencerwooo/dowww',
    bimg: dowww,
  },
  {
    name: 'BIThesis',
    link: 'https://github.com/BITNP/BIThesis',
    slug: 'BITNP/BIThesis',
    bimg: bithesis,
  },
  {
    name: 'vscode-math-to-image',
    link: 'https://github.com/TeamMeow/vscode-math-to-image',
    slug: 'TeamMeow/vscode-math-to-image',
    bimg: vscodeMathToImage,
  },
]
