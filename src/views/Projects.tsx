import { BeakerIcon } from '@heroicons/react/outline'
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../config/projects'

const projectCards = projects.map(p => (
  <ProjectCard key={p.name} name={p.name} link={p.link} slug={p.slug} bimg={p.bimg} />
))

const Projects = () => {
  return (
    <div className="lg:pl-2">
      <div className="text-2xl font-bold flex items-center">
        <BeakerIcon className="mr-4 w-6 h-6" />
        <div>Projects</div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{projectCards}</div>
    </div>
  )
}

export default Projects
