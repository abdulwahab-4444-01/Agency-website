import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Trusted from "./component/Trusted";
import Help from "./component/Services";
import Ourwork from "./component/Ourwork";
import Teams from "./component/Teams";
import { useState, useEffect } from "react";
import Contactus from "./component/Contactus";
import { Toaster } from "react-hot-toast";
import Footer from "./component/Footer";
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