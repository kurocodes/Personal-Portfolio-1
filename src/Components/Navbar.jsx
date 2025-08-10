import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [hoveredLink, setHoveredLink] = useState('');

    return (
        <nav className='w-full flex items-center justify-end my-5 max-lg:sticky top-5 z-10'>
            <div className="w-full lg:w-[60%] xl:w-[40%] flex items-center justify-between shadow-[0px_0px_4px_rgb(0,0,0,25%)] rounded-xl px-8 py-3 bg-[#F2F5F9]">

                <NavLink onMouseEnter={() => setHoveredLink('home')} onMouseLeave={() => setHoveredLink('')} to='/' className={({ isActive }) => 
                        `flex flex-col p-[15px] items-center rounded-xl w-[20%] font-[Raleway] gap-1 transition-all ${
                            isActive || hoveredLink == 'home' ? 'bg-gradient-to-br from-[#E80505] to-[#FF9C1A] text-white scale-[1.1]' : 'bg-[#E1E8EF]'
                        }`
                    }>
                    {({ isActive }) => (
                        <>
                            <img 
                                className={`w-[25px] ${isActive || hoveredLink == 'home' ? 'filter brightness-0 invert' : 'opacity-50'}`} 
                                src={assets.home_icon} 
                                alt="Home Icon" 
                            />
                            <div className="text-sm font-semibold">Home</div>
                        </>
                    )}
                </NavLink>

                <NavLink onMouseEnter={() => setHoveredLink('resume')} onMouseLeave={() => setHoveredLink('')} to='/skills' className={({ isActive }) => 
                        `flex flex-col p-[15px] items-center rounded-xl w-[20%] font-[Raleway] gap-1 transition-all ${
                            isActive || hoveredLink == 'resume' ? 'bg-gradient-to-br from-[#E80505] to-[#FF9C1A] text-white scale-[1.1]' : 'bg-[#E1E8EF]'
                        }`
                    }>
                    {({ isActive }) => (
                        <>
                            <img 
                                className={`w-[25px] ${isActive || hoveredLink == 'resume' ? 'filter brightness-0 invert' : 'opacity-50'}`} 
                                src={assets.resume_icon} 
                                alt="Home Icon" 
                            />
                            <div className="text-sm font-semibold">Skills</div>
                        </>
                    )}
                </NavLink>

                <NavLink onMouseEnter={() => setHoveredLink('work')} onMouseLeave={() => setHoveredLink('')} to='/work' className={({ isActive }) => 
                        `flex flex-col p-[15px] items-center rounded-xl w-[20%] font-[Raleway] gap-1 transition-all ${
                            isActive || hoveredLink == 'work' ? 'bg-gradient-to-br from-[#E80505] to-[#FF9C1A] text-white scale-[1.1]' : 'bg-[#E1E8EF]'
                        }`
                    }>
                    {({ isActive }) => (
                        <>
                            <img 
                                className={`w-[25px] ${isActive || hoveredLink == 'work' ? 'filter brightness-0 invert' : 'opacity-50'}`} 
                                src={assets.work_icon} 
                                alt="Home Icon" 
                            />
                            <div className="text-sm font-semibold">Work</div>
                        </>
                    )}
                </NavLink>

                <NavLink onMouseEnter={() => setHoveredLink('contact')} onMouseLeave={() => setHoveredLink('')} to='/contact' className={({ isActive }) => 
                        `flex flex-col p-[15px] items-center rounded-xl w-[20%] font-[Raleway] gap-1 transition-all ${
                            isActive || hoveredLink == 'contact' ? 'bg-gradient-to-br from-[#E80505] to-[#FF9C1A] text-white scale-[1.1]' : 'bg-[#E1E8EF]'
                        }`
                    }>
                    {({ isActive }) => (
                        <>
                            <img 
                                className={`w-[25px] ${isActive || hoveredLink == 'contact' ? 'filter brightness-0 invert' : 'opacity-50'}`} 
                                src={assets.contact_icon} 
                                alt="Home Icon" 
                            />
                            <div className="text-sm font-semibold">Contact</div>
                        </>
                    )}
                </NavLink>

            </div>
        </nav>
    )
}

export default Navbar