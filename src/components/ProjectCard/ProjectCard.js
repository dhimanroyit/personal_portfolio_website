import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ProjectCard({title, image, description, tools, links}) {
  return (
    <section className="shadow-lg">
      <div className="">
        <img src={image} alt=""/>
      </div>
      <div className="p-10">
        <div className="flex items-center mb-2">
        <h2 className="text-2xl mr-5">{title}</h2>
        <div className="space-x-3">
          {links.map(link => (
            <a href={link.link} className="hover:text-theme-primary transition-colors duration-100">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
        </div>
        <p className="mb-3">{description}</p>
        <div className="space-x-2 mb-3">
          {tools.map(tool => (
            <div key={tool} className="inline-block bg-gray-600 text-xs py-1 px-3 text-white rounded-full">
              {tool}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default ProjectCard
