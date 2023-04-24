import React from 'react'
import ScreenCenter from '../../shared/ScreenCenterLayout'

const ApiStatusMsg = ({ isPending, error }) => {
  return (
    <ScreenCenter>
      {isPending && <div className='text-medium'>Loading questions...</div>}
      {error && <div>{error}</div>}
    </ScreenCenter>
  )
}

export default ApiStatusMsg
