import React from 'react'

const BackgroundImage = ({ children, className }) => {
  return (
    <div className={`w-full h-full absolute overflow-auto bg-cover bg-center ${className}`}>
      {children}
    </div>
  )
}

export default BackgroundImage