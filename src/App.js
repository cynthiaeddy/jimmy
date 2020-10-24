import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import AboutJim from './components/aboutJim/AboutJim'
import AboutWF from './components/aboutWF/AboutWF'
import SignUp from './components/signUp/SignUp'
import Videos from './components/videoPage/Videos'
import AltNavbar from './components/altNavbar/AltNavbar'
import AltHome from './components/altHome/AltHome'






function App() {
  return (
    <div className="container">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/world-foods" component={AboutWF} />
      <Route path="/about-james" component={AboutJim} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/videos" component={Videos} />
      <Route path="/alt-navbar" component={AltNavbar} />
      <Route path="/alt-home" component={AltHome} />



    </div>
  );
}

export default App;
