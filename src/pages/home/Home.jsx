import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
 const backHome = () => {
  return navigate("/")
 }
 const about = () => {
  return navigate("/about")
 }
 const project = () => {
  return navigate("/project")
 }
  return (
    <div>
      <h1>Home</h1>
      <div className=" flex gap-4 cursor-pointer">
        <p onClick={() => backHome()} >Home</p>
        <p onClick={() => about()}>About</p>
        <p onClick={() => project()}>Project</p>
      </div>
    </div>
    
  )
}

export default Home