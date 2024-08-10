import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Abouts, Home, Intro, Notfound, Projects } from "./pages";
import { useEffect, useState } from "react";


const MainApp = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<Abouts/>} />
    <Route path="/project" element={<Projects/>} />
    <Route path="/*" element={<Notfound/>} />
    </Routes>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false); // Hide intro after 10 seconds
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <>
    <BrowserRouter basename="/KrisPortfolio/">
    {showIntro ? <Intro /> : <MainApp />}
    </BrowserRouter>
    </>
  )
}

export default App
