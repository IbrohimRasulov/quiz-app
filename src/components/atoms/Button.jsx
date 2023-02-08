import React from "react"

const Button = ({ content = "Button", className, onClick, isDisabled = false }) => {
  return (
    <button
      className={`border rounded-small px-[1.6em] py-[1em] m-3 disabled:opacity-70 ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {content}
    </button>
  )
}

export default Button
