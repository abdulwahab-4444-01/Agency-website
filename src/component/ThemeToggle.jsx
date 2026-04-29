import React, { useEffect } from 'react'
import assets from '../assets/Data'


const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <img
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        className='w-8 h-8 p-1.5 border border-gray-500 rounded-full'
        alt=''
      />
    </button>
  )
}
export default ThemeToggle