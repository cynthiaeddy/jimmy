import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import AboutJim from './components/aboutJim/AboutJim'
import AboutWF from './components/aboutWF/AboutWF'
import SignUp from './components/signUp/SignUp'
import Videos from './components/videoPage/Videos'





function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/" component={Home} />
						<Route path="/about-jim" component={AboutJim} />
      <Route path="/world-foods" component={AboutWF} />
      <Route path="/about-jim" component={AboutJim} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/videos" component={Videos} />


    </div>
  );
}

export default App;
