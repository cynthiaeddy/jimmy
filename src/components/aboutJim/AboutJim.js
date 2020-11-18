import React from 'react';

import { Link } from 'react-router-dom';

import '../../stylesheets/AboutJim.css'


import bookfork from '../../assets/images/bookfork.jpg'
import bookJim from '../../assets/images/bookJim.jpg'
import comfort from '../../assets/images/comfort.jpg'
import cradle from '../../assets/images/cradle.jpg'
import saveur from '../../assets/images/saveur.jpg'
import openerWhite from '../../assets/images/openerWhite.jpg'

import jimfullsm from '../../assets/images/jimfullsm.png'







const AboutJim = () => {
  return (
    <section className='aboutJim'>

        <div className='jim left'>
          <p><span className='dropcap'>J</span>ames Oseland travels extensively in search of the world’s best restaurants, street food stalls, markets, and home cooks. He is the author and editor of World Food, a new book series from Ten Speed Press, and was the editor-in-chief for nine years of Saveur, America’s most acclaimed food magazine, where his work garnered many accolades, including seven James Beard Awards. His cookbook Cradle of Flavor was named one of the best books of 2006 by the New York Times and Good Morning America. Additionally, James’s writing has appeared in Gourmet, Vogue, Food and Wine, and the Wall Street Journal, where he writes the “Cook’s Playbook” column. He has appeared on Celebrity Apprentice, the Today Show, Iron Chef America, and was a permanent judge on all five seasons of Bravo’s Top Chef Masters. James is a popular cooking teacher and has taught at the Institute for Culinary Education, the New School, and New York City’s Natural Gourmet. He has lectured at culinary institutes and food societies around the world; in 2011, he delivered the keynote speech for the International Food Bloggers Conference. In 2013, he starred as himself in a series of Wendy’s commercials. He has lived in Indonesia, Malaysia, Thailand, and India and now calls Mexico City home. </p>

        </div>
        <div className='jim main'>
          <img src={jimfullsm} className='jimPhoto' alt=''></img>
          </div>

        <div className='jim right'>
          <img src={bookfork} className='righty'alt=''></img>
          <img src={comfort} className='righty'alt=''></img>
          <img src={openerWhite} className='righty white'alt=''></img>
          <img src={cradle} className='righty'alt=''></img>
          <img src={saveur} className='righty'alt=''></img>
          <img src={bookJim} className='righty' alt=''></img>
          </div>


      </section>


  );
};

export default AboutJim;

