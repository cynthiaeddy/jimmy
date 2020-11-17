import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import AboutJim from './components/aboutJim/AboutJim'
import AboutWF from './components/aboutWF/AboutWF'
import SignUp from './components/signUp/SignUp'
import Videos from './components/videoPage/Videos'
import NavBarToggle from './components/navBarToggle/NavBarToggle'
import Navbar from './components/navbar/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css";







function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/world-foods" component={AboutWF} />
      <Route path="/about-james" component={AboutJim} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/videos" component={Videos} />
      <Route path="/navbar" component={NavBarToggle} />


      </div>
    </div>
  );
}

export default App;
