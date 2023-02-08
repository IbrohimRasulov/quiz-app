import React from 'react'

const Loader = ({className}) => {
  return (
    <div className="loader m-auto mt-10">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
    </div>
  )
}

export default Loader