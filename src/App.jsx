import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Work from './Pages/Work'
import Contact from './Pages/Contact'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='h-screen md:w-[80vw] mx-5 md:m-auto relative'>
      <ToastContainer />
      <Header />
      <Navbar />

      <div className="w-full lg:h-[600px] flex flex-col lg:flex-row mt-10 gap-5 lg:relative">

        <Profile />

        <div className="grow px-8 sm:px-16 py-9 w-full bg-white rounded-2xl mb-10">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App