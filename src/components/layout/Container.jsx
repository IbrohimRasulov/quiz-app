import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`mx-24 my-14 ${className}`}>
      {children}
    </div>
  )
}

export default Container
