import React from 'react';
import mexico from '../../assets/images/mexico.jpg'
import paris from '../../assets/images/paris.jpg'

const AboutWF = () => {
  return (
    <div className='worldFoods'>
<h2>World Foods</h2>
      <div className='wf-content'>
        <p> "Take care you do not disturb it; and even if the room feel close, do not to-night open the window or the door."

"I promise," said Lucy, "and thank you both a thousand times for all your kindness to me! Oh, what have I done to be blessed with such friends?"</p>
        <div className='box'>
        <img src={mexico} alt='Mexico Book Cover'></img>
      <img src={paris} alt='Paris Book Cover'></img>
        </div>
        </div>
    </div>
  );
};

export default AboutWF;
