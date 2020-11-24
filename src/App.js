import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import AboutJim from './components/aboutJim/AboutJim'
import AboutWF from './components/aboutWF/AboutMexico'
import AboutMexico from './components/aboutWF/AboutMexico'

import SignUp from './components/signUp/SignUp'
import Blog from './components/blog/Blog'
import NavBarToggle from './components/navBarToggle/NavBarToggle'
import Navbar from './components/navbar/Navbar'






function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/world-foods" component={AboutMexico} />
      <Route path="/about-james" component={AboutJim} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/blog" component={Blog} />
      <Route path="/navbar" component={NavBarToggle} />


      </div>
    </div>
  );
}

export default App;
