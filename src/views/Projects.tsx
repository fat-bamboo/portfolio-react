import React from 'react'
import { BeakerOutline } from 'heroicons-react'
import { projects } from '../config/projects'

import ProjectCard from '../components/ProjectCard'

const projectCards = projects.map(p => (
  <ProjectCard
    key={p.name}
    name={p.name}
    link={p.link}
    description={p.description}
    backgroundImage={p.backgroundImage}
  />
))

const Projects = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <BeakerOutline size={28} className="mr-4" />
        <div>Projects</div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{projectCards}</div>
    </div>
  )
}

export default Projects
