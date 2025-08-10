import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <header className='w-full flex items-center justify-between py-5'>
      <div className="text-2xl font-[Pacifico]">
        Kuro
        <span className='text-[#F87014]'> Codes</span>
      </div>
      <img className='p-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.1] transition-all bg-[#EBF2FA] cursor-pointer' src={assets.theme_icon} alt="" />
    </header>
  )
}

export default Header