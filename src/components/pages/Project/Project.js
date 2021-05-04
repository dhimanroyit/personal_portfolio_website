import React from 'react'
import SectionHeading from './../../SectionHeading/SectionHeading';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import traveller from './../../../assets/img/project/Travelers.png';
import bookStore from './../../../assets/img/project/BookStore.png';
import buyTicket from './../../../assets/img/project/BuyTicket.png'
import ProjectCard from '../../ProjectCard/ProjectCard';

const projectsData = [
  {
    id: 'a1', 
    title: 'Travelers Web App', 
    image: traveller,
    description: "It's a Traveller Agency Service Web application. There are have Firebase Authentication, Buy Service, User Dashboard, Show Service Status, User Review, Admin Dashboard, Add Service, Manage Services feature, etc.", 
    tools: ['HTML', 'TailwindCSS', 'React', 'Firebase', 'MongoDB', 'Node.js', 'Express.js'], 
    links: [
      {id: 'b1', icon: faExternalLinkAlt, link: 'https://travelers-73e22.web.app/'},
      {id: 'b2', icon: faGithub, link: 'https://github.com/dhimanroyit/travelers_client'},
    ]
  },
  {
    id: 'a2', 
    title: 'Book Store Web App ', 
    image: bookStore,
    description: "It is an online Book Store E-commerce Web Application. There are have Firebase Authentication, Order Book, Show Order List, Add Book, Manage Books feature, etc.", 
    tools: ['HTML', 'Pure CSS', 'React', 'Firebase', 'MongoDB', 'Node.js', 'Express.js'], 
    links: [
      {id: 'b1', icon: faExternalLinkAlt, link: 'https://bookstore-284fc.web.app/'},
      {id: 'b2', icon: faGithub, link: 'https://github.com/dhimanroyit/book_store_client'},
    ]
  },
  {
    id: 'a3', 
    title: 'Buy Ticket Web App ', 
    image: buyTicket,
    description: "This project is a web application for the online ticket service provider. There are types of 4 service bikes, cars, buses, and trains. Firebase Authentication, Destination Pick from and Pick to, Google Map Integration",
    tools: ['HTML', 'CSS', 'bootstrap', 'React', 'Firebase'], 
    links: [
      {id: 'b1', icon: faExternalLinkAlt, link: 'https://buyticket-9f85d.web.app/'},
      {id: 'b2', icon: faGithub, link: 'https://github.com/dhimanroyit/buy_ticket'},
    ]
  },
]

function Project() {
  return (
    <div className="min-h-screen">
      <SectionHeading>Projects</SectionHeading>
      <div className="px-20 mt-5 mb-10 space-y-10">
        {projectsData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Project
