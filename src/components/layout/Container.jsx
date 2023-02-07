import React from 'react'

export default function Container({ children, className }) {
  return (
    <div className={`mx-18 my-10 ${className}`}>
      {children}
    </div>
  )
}
