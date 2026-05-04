import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Help from "./components/Services";
import Ourwork from "./components/Ourwork";
import Teams from "./components/Teams";
import { useState, useEffect } from "react";
import Contactus from "./components/Contactus";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trusted />
      <Help />
      <Ourwork />
      <Teams />
      <Contactus />
      <Footer theme={theme} />
    </div>
  );
}

export default App;