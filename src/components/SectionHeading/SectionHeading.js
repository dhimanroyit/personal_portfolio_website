import React from 'react'

function SectionHeading({children}) {
  return (
    <header className="py-2.5 p-5 mt-3 bg-theme-primary w-max relative section-heading">
      <h1 className="text-2xl text-white uppercase font-bold">{children}</h1>
    </header>
  )
}

export default SectionHeading
