import React from 'react';
import mexico from '../../assets/images/mexico.jpg'
import opener from '../../assets/images/jim indesign3 1.png'
import openerBlue from '../../assets/images/openerBlue.jpg'
import openerCorn from '../../assets/images/openerCorn.jpg'
import openerDessert from '../../assets/images/openerDessert.jpg'
import openerFighter from '../../assets/images/openerFighter.jpg'
import openerFlan from '../../assets/images/openerFlan.jpg'
import openergal from '../../assets/images/openergal.jpg'
import openerMan from '../../assets/images/openerMan.jpg'
import openerOysters from '../../assets/images/openerOysters.jpg'
import openerRed from '../../assets/images/openerRed.jpg'
import openerWoman from '../../assets/images/openerWoman.jpg'
import openerWaiter from '../../assets/images/openerWaiter.jpg'






const Home = () => {
  return (
    <div className='home'>

      <h1>World Food Books</h1>
      <section className='photo-container'>
        <div className='interior left'>
          <img src={openergal} className='lefty'></img>
          <img src={openerFlan} className='lefty'></img>
          <img src={openerCorn} className='lefty'></img>
          <img src={openerWoman} className='lefty'></img>
          <img src={openerMan} className='lefty'></img>
          <img src={openerDessert} className='lefty'></img>
        </div>
        <div className='interior main'>
          <img src={mexico} className='mexico'></img>
        </div>
        <div className='interior right'>
          <img src={openerBlue} className='righty'></img>
          <img src={openerWaiter} className='righty'></img>
          <img src={openerOysters} className='righty white'></img>
          <img src={openerOysters} className='righty'></img>
          <img src={openerRed} className='righty'></img>
          <img src={openerFighter} className='righty'></img>
        </div>

      </section>
      {/* <img src={opener} className='opener'alt='opener'></img> */}


    </div>
  );
};

export default Home;
