import React from 'react'
import hero from '../../../assets/video/hero.mp4';
import Avatar from '../../Avatar/Avatar';
import profilePic from '../../../assets/img/profile_pic.jpg'
import Button from '../../Button/Button';

function Home() {
  return (
  <div className="h-screen relative flex justify-center items-center">
    <video autoPlay muted loop className="absolute inset-0 block w-full h-full z-10 object-cover" src={hero} ></video>
    <div className="absolute inset-0 bg-gray-900 z-20 opacity-70"></div>
    <div className="z-30 flex flex-col items-center">
      <Avatar img={profilePic} className="w-52 h-52" />
      <h1 className="text-7xl mt-6 uppercase text-white">Dhiman Roy</h1>
      <p className="text-white mt-4 uppercase">Front-End Developer</p>
      <Button className="mt-10 uppercase">Download Resume</Button>
    </div>
  </div>
  )
}

export default Home
