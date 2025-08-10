import React from 'react'

const Title = ({ text }) => {
  return (
    <div className='font-[poppins] flex gap-5 items-center'>
        <h2 className='text-3xl sm:text-4xl font-medium'>{text}</h2>
        <div className='tile-line w-[150px] h-[2px] bg-gradient-to-r from-[#FF9C1A] to-[#E80505]'></div>
    </div>
  )
}

export default Title