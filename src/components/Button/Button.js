import React from 'react'

function Button({children, clicked, className}) {
  return (
    <button 
      className={`px-10 py-3 rounded-full bg-theme-primary text-white ${className || ''}`}
      onClick={clicked}>
      {children}
    </button>
  )
}

export default Button
