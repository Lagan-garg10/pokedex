import React from 'react'

function Wrapper({children}) {
  return (
    <div className='mx-20 relative border-solid border-[0.5px] border-[rgba(255,255,255,0.052)] h-[80vh] border-t-0 border-b-0 overflow-hidden'>
      {children}
    </div>
  )
}

export default Wrapper
