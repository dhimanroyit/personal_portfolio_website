import React from 'react'

function Avatar({img, className}) {
  return (
    <div className={`rounded-full overflow-hidden p-1.5 w-32 h-32  bg-theme-avatar ${className || ''}`}>
        <img src={img} alt="" className="block rounded-full h-full w-full"/>
    </div>
  )
}

export default Avatar
