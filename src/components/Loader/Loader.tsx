import React from 'react'

const Loader = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='w-24 h-24 border-4 border-blue-500 border-solid rounded-full animate-spin border-t-0'></div>
    </div>
  )
}

export default Loader
