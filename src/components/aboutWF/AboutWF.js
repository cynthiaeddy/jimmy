import React from 'react';
import { Link } from 'react-router-dom';

import mexico from '../../assets/images/mexico.jpg'
import '../../stylesheets/AboutWF.css'

import cactusSpread from '../../assets/images/cactusSpread.jpg'

const AboutWF = () => {
  return (
    <div className='wf-content'>
     <h2><div className='back'>back</div></h2>

<div className='main'>
      <a href target="#"> <h2>buy me text will be in navbar</h2></a><img src={cactusSpread} className='spread' alt='spread'></img>
      </div>
      <h2><div className='forward'>forward</div></h2>
        </div>

  );
};

export default AboutWF;
