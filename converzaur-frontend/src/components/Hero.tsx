import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-auto px-20 md:min-h-screen md:flex-nowrap flex-wrap md:py-20 py-7 flex items-center justify-center text-blue-900'>
        <h1 className='text-6xl text-center font-bold'>Welcome to <span className='text-rose-900'>Converzaur</span></h1>
        <p className='text-4xl font-semibold'>Convert PDF, Clip Audio and Resize Images at one place</p>
    </div>
  )
}

export default Hero