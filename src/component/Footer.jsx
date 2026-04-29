import React from 'react'
import assets from '../assets/Data'

const Footer = () => {
  return (
    <>
      <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
          
          <div>
            <img src={assets.logo} alt="Logo" className='w-32 sm:w-44' />
            
            <p className='max-w-md mt-4 text-gray-600 dark:text-gray-300'>
              From strategy to execution, we craft digital solutions that move your business forward
            </p>

            <ul className='mt-4 flex flex-wrap gap-8 text-sm'>
              <li>
                <a href="#hero" className='hover:text-primary'>Home</a>
              </li>
              <li>
                <a href="#services" className='hover:text-primary'>Services</a>
              </li>
              <li>
                <a href="#our-work" className='hover:text-primary'>Our Work</a>
              </li>
              <li>
                <a href="#contactus" className='hover:text-primary'>Contact Us</a>
              </li>
            </ul>
          </div>

          <div></div>

        </div>

      </div>
    </>
  )
}

export default Footer