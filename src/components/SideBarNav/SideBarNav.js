import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SideBarNavItem from './SideBarNavItem/SideBarNavItem'

function SideBarNav() {
  const sidebar = [
    {id: 'a1', path:"/", title: 'home'},
    {id: 'a2', path:"/project", title: 'project'},
    {id: 'a3', path:"/resume", title: 'resume'},
    {id: 'a4', path:"/blog", title: 'blog'},
    {id: 'a4', path:"/contact", title: 'contact'},
  ]
  return (
    <nav className="h-screen w-72 fixed left-0 top-0  bg-theme-secondary">
      <div className="mt-24 mb-12 flex flex-col items-center">
        <h1 className="text-2xl font-extrabold text-white">Dhiman Roy</h1>
        <p className="text-xs text-white">Front-end Developer</p>
      </div>
      <ul className="">
        {sidebar.map(navItem => (
          <SideBarNavItem 
            key={navItem.id} 
            {...navItem} 
          />
        ))}
      </ul>
      <div className="mt-10 flex justify-center space-x-2">
        <a
          target="_blank"
          rel="noreferrer" 
          href="https://www.facebook.com/dhimanroyit" 
          className="p-2 hover:text-theme-primary transition-colors duration-100 text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        <a
          target="_blank"
          rel="noreferrer" 
          href="https://www.linkedin.com/in/dhimanroyit" 
          className="p-2 hover:text-theme-primary transition-colors duration-100 text-white">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        <a
          target="_blank"
          rel="noreferrer" 
          href="https://github.com/dhimanroyit" 
          className="p-2 hover:text-theme-primary transition-colors duration-100 text-white">
            <FontAwesomeIcon icon={faGithub} />
          </a>
      </div>
    </nav>
  )
}

export default SideBarNav
