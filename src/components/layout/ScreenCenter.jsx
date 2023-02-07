import React from 'react'

function ScreenCenter({ children, className }) {
  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}>
      {children}
    </div>
  )
}

export default ScreenCenter;
