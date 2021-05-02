import React from 'react'
import hero from '../../../assets/img/hero.jpg';
import Avatar from '../../Avatar/Avatar';
import profilePic from '../../../assets/img/profile_pic.jpg'
import Button from '../../Button/Button';

function Home() {
  return (
  <div className="h-screen relative flex justify-center items-center">
    <img className="absolute inset-0 block w-full h-full z-10" src={hero} alt=""/>
    <div className="absolute inset-0 bg-gray-900 z-20 opacity-70"></div>
    <div className="z-30 flex flex-col items-center">
      <Avatar img={profilePic} className="w-52 h-52" />
      <h1 className="text-7xl mt-6 text-white">Dhiman Roy</h1>
      <p className="text-white mt-4">Front-End Developer</p>
      <Button className="mt-10">Download Resume</Button>
    </div>
  </div>
  )
}

export default Home
