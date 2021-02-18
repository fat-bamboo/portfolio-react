import React from 'react'
import { BeakerOutline } from 'heroicons-react'

import substats from '../assets/substats.png'
import onedriveCfIndex from '../assets/onedrive-cf-index.png'
import dowww from '../assets/dowww.png'
import bithesis from '../assets/bithesis.png'
import vscodeMathToImage from '../assets/vscode-math-to-image.png'

import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <BeakerOutline size={28} className="mr-4" />
        <div>Projects</div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          name="Substats"
          link="https://github.com/spencerwooo/substats"
          description="spencerwooo/substats"
          backgroundImage={substats}
        />
        <ProjectCard
          name="onedrive-cf-index"
          link="https://github.com/spencerwooo/onedrive-cf-index"
          description="spencerwooo/onedrive-cf-index"
          backgroundImage={onedriveCfIndex}
        />
        <ProjectCard
          name="dowww"
          link="https://github.com/spencerwooo/dowww"
          description="spencerwooo/dowww"
          backgroundImage={dowww}
        />
        <ProjectCard
          name="BIThesis"
          link="https://github.com/BITNP/BIThesis"
          description="BITNP/BIThesis"
          backgroundImage={bithesis}
        />
        <ProjectCard
          name="vscode-math-to-image"
          link="https://github.com/TeamMeow/vscode-math-to-image"
          description="TeamMeow/vscode-math-to-image"
          backgroundImage={vscodeMathToImage}
        />
      </div>
    </div>
  )
}

export default Projects
