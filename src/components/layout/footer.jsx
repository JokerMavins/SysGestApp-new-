import React from 'react'
import {FaFacebook, FaLinkedin, FaTwitter, FaVk, FaInternetExplorer, FaMailBulk} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className="container bg-carousel-pattern bg-cover p-10">
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-row space-x-3 my-5'>
            <a href='#' className='w-8 h-8 bg-slate-700 items-center justify-center flex'><FaFacebook className="text-white" /></a>
            <a href='#' className='w-8 h-8 bg-slate-700 items-center justify-center flex'><FaLinkedin className="text-white" /></a>
            <a href='#' className='w-8 h-8 bg-slate-700 items-center justify-center flex'><FaTwitter className="text-white" /></a>
            <a href='#' className='w-8 h-8 bg-slate-700 items-center justify-center flex'><FaVk className="text-white" /></a>
            <a href='#' className='w-8 h-8 bg-slate-700 items-center justify-center flex'><FaInternetExplorer className="text-white" /></a>
            <a href='#' className='w-8 h-8 bg-slate-700 items-center justify-center flex'><FaMailBulk className="text-white" /></a>
          </div>
          <p className='text-white'>Contactez-nous</p>
        </div>
      </div>
      <div className='flex justify-between flex-row bg-gray-800 p-3'>
        <h2 className='text-white'>Copyright 2018 - All Rights Reserved - Domain Name</h2>
        <h2 className='text-white'>Réaliser par A. R. T.</h2>
      </div>
    </>
  )
}

export default Footer