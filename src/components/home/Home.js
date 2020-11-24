import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHome from '../navbarHome/NavbarHome'

import '../../stylesheets/home.css'

import mexico from '../../assets/images/mexico.jpg'

import jimIndesign from '../../assets/images/jim indesign4.jpg'

import openerBlue from '../../assets/images/openerBlue.jpg'
import openerCorn from '../../assets/images/openerCorn.jpg'
import openerDessert from '../../assets/images/openerDessert.jpg'
import openerFighter from '../../assets/images/openerFighter.jpg'
import openerFlan from '../../assets/images/openerFlan.jpg'
import openergal from '../../assets/images/openergal.jpg'
import openerWhite from '../../assets/images/openerWhite.jpg'
import openerMan from '../../assets/images/openerMan.jpg'
import openerOysters from '../../assets/images/openerOysters.jpg'
import openerRed from '../../assets/images/openerRed.jpg'
import openerWoman from '../../assets/images/openerWoman.jpg'
import openerWaiter from '../../assets/images/openerWaiter.jpg'







const Home = () => {
  return (

    <div className='home-container'>
      <NavbarHome/>
    <div className='home'>

<img src={jimIndesign} className='fpo'></img>

      <h1>World Food</h1>
      <section className='photo-container'>
        <div className='interior left'>
          <img src={openergal} className='lefty'alt=''></img>
          <img src={openerFlan} className='lefty'alt=''></img>
          <img src={openerCorn} className='lefty'alt=''></img>
          <img src={openerWoman} className='lefty'alt=''></img>
          <img src={openerMan} className='lefty'alt=''></img>
            <img src={openerDessert} className='lefty' alt=''></img>
            <h2 className='photoCredit'>Photography by James Roper</h2>
        </div>
        <div className='interior main'>
        <Link to="/world-foods" className="world-foods"><img src={mexico} className='mexico'alt=''></img></Link>
        </div>
        <div className='interior right'>
          <img src={openerBlue} className='righty'alt=''></img>
          <img src={openerWaiter} className='righty'alt=''></img>
          <img src={openerWhite} className='righty white'alt=''></img>
          <img src={openerOysters} className='righty'alt=''></img>
          <img src={openerWhite} className='righty'alt=''></img>
          <img src={openerFighter} className='righty'alt=''></img>
            <div className='homeDek'>
              <h4><span className='intro'>Introducing World Food,</span> an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h4>
        <button className='sign-up'><h7>SIGN UP NOW!</h7></button>
            </div>
            </div>

      </section>
      </div>

      </div>
  );
};

export default Home;
