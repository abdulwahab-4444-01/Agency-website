import  { useEffect, useState } from 'react'
import { Sun, Moon } from "lucide-react";
const ThemeToggle = () => {
  const [isDarkmode, setIsDarkmode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkmode]);

  const toggleTheme = () => {
    if (isDarkmode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkmode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkmode(true);
    }
  };
  return (
    <button onClick={toggleTheme} className={`fixed top-5 z-50 right-5 p-2 rounded-full transition-colors duration-300 ${isDarkmode ? "bg-gray-800" : "bg-white"
      }`}>
      {isDarkmode
         ?
         <Sun className="h-6 w-6 text-yellow-300" />
         :
        <Moon className="h-6 w-6 text-blue-900" /> 
      }
    </button>
  );
};

export default ThemeToggle;