import React from 'react'

function Container({ children, className }) {
  return (
    <div className={`mx-18 my-10 ${className}`}>
      {children}
    </div>
  )
}

export default Container;
