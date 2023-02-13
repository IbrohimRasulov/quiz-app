import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`mx-20 my-14 ${className}`}>
      {children}
    </div>
  )
}

export default Container
