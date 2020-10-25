import React from 'react';
import mexico from '../../assets/images/mexico.jpg'
import paris from '../../assets/images/paris.jpg'
import jim from '../../assets/images/jim.png'


const AboutJim = () => {
    return (
      <div className='jim'>
        <h2>About James Oseland</h2>
        <div className='jim-outside-container'>
        <div className='jim-inside-container'>
          <div className='jim-scroll'>
        <p>We then waited whilst Lucy made her toilet for the night, and when she was in bed he came and himself fixed the wreath of garlic round her neck. The last words he said to her were:--

            "Take care you do not disturb it; and even if the room feel close, do not to-night open the window or the door."

            "I promise," said Lucy, "and thank you both a thousand times for all your kindness to me! Oh, what have I done to be blessed with such friends?"

  As we left the house in my fly, which was waiting, Van Helsing said:--</p>
  </div>

        <div className='jim-box'>
        <img src={mexico} alt='Mexico Book Cover'></img>
          <img src={paris} alt='Paris Book Cover'></img>
          <img src={jim} alt='Jimmy Neurosis Book Cover' className='jim-book'></img>


          </div>
          </div>
          <div className='jim-foto'>
            <p>ur foto here</p>

          </div>

        </div>
      </div>
    );
  };




export default AboutJim;
