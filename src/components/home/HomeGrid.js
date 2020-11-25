import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHome from '../navbarHome/NavbarHome'

import '../../stylesheets/HomeGrid.css'

import mexico from '../../assets/images/mexico.jpg'


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







const HomeGrid = () => {
  return (

    <div className='home-container'>
      <NavbarHome />

      <div className='home outer-grid'>

      <div className='grid-1 header'>
        <h1>World Food</h1>
      </div>

      <div className='grid-2 left'>
        <img src={openergal} className='gal'alt=''></img>
        <img src={openerFlan} className='flan'alt=''></img>
        <img src={openerCorn} className='corn'alt=''></img>
        <img src={openerWoman} className='woman'alt=''></img>
        <img src={openerMan} className='man'alt=''></img>
        <img src={openerDessert} className='dessert' alt=''></img>
      </div>

      <div className='grid-3 main'>
        <Link to="/world-food" className="world-food"><img src={mexico} className='mexico'alt=''></img></Link>
      </div>

        <div className='grid-4 right'>
          <img src={openerBlue} className='image-tl'alt=''></img>
          <img src={openerWaiter} className='image-tr' alt=''></img>
          <div className='homeDek copy'>
            <h4><span className='intro'>Introducing World Food,</span> an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h4>
            <button className='signUpBtn'><h7>SIGN UP NOW!</h7></button>
          </div>
          <img src={openerOysters} className='image-m'alt=''></img>
          <img src={openerFighter} className='image-b'alt=''></img>
        </div>

        <div>
          <h2 className='grid-5 footer'>Photography by James Roper</h2>
        </div>
        {/* //end of grid */}
      </div>
      </div>
  );
};

export default HomeGrid;
