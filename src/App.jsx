import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Abouts, Home, Projects } from "./pages";

function App() {

  return (
    <>
    <BrowserRouter basename="/KrisPortfolio/">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<Abouts/>} />
    <Route path="/project" element={<Projects/>} />
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
