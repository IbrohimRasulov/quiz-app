import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-3xl mx-auto my-14 ${className}`}>
      {children}
    </div>
  )
}

export default Container
