import React from 'react'
import "./index.scss"
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
const Home = () => {

  
  return (
    <>
  
<div className="container home-page">
 <div className="text-zone">
<h1> Hi, <br/>
I'm 
 <img src={LogoTitle} alt="home logo"/>
ahil <br/> Web Developer
</h1>
<h2>Frontend Developer</h2>
<Link to='/contact' href="" className="flat-button" >
Contact me
</Link>
 </div>
  <div className="logo-side">
    <div className="right">

     <img src={LogoTitle} alt=" logo"/>
    </div>

  </div>
</div>
   <Loader type="pacman" />
</>
  )
}

export default Home