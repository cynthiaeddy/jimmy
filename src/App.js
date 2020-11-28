import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomeGrid from './components/home/HomeGrid'

import AboutJim from './components/aboutJim/AboutJim'
import AboutWF from './components/aboutWF/AboutMexico'
import AboutMexico from './components/aboutWF/AboutMexico'

import SignUp from './components/signUp/SignUp'
import Blog from './components/blog/Blog'
import NavBarToggle from './components/navBarToggle/NavBarToggle'






function App() {
  return (
    <div>
      <Route exact path="/" component={HomeGrid} />
      <Route path="/world-food" component={AboutMexico} />
      <Route path="/about-james" component={AboutJim} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/blog" component={Blog} />
      <Route path="/navbar" component={NavBarToggle} />








      {/* </div> */}
    </div>
  );
}

export default App;
