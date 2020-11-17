import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



import mexico from '../../assets/images/mexico.jpg'
import '../../stylesheets/AboutWF.css'

import cactusSpread from '../../assets/images/cactusSpread.jpg'
import biggerFamily from '../../assets/images/biggerFamily.jpg'
import biggerMasa from '../../assets/images/biggerMasa.jpg'
import biggerFlautas from '../../assets/images/biggerFlautas.jpg'


const AboutWF = () => {
  return (
    <div className='wf-container'>
    <div className='wf-content'>
     <h2><div className='back'>back</div></h2>

<div className='main'>
          <a href target="#"> <h2>buy me text will be in navbar</h2></a>
          {/* <div className='spread'> */}
          <div className='carousel-wrapper'>






          <Carousel
       showThumbs={false}
              infiniteLoop={true}
              showArrows={true}
              // onChange={onChange}
              // onClickItem={onClickItem}
      //  autoPlay
       interval={4000}
       transitionTime={1000}
       showIndicators={false}
       centerMode
      //  centerSlidePercentage={50}
       showStatus={false}
       showArrows={false}
       >


         <img src={biggerFlautas} className='spread'alt=''/>


          <img src={cactusSpread} className='spread' alt=''/>

            <img src={biggerFamily} className='spread'alt='' />
            <img src={cactusSpread} className='spread'alt='' />

            </Carousel>
            </div>
      </div>
      <h2><div className='forward'>forward</div></h2>
      </div>
      </div>

  );
};

export default AboutWF;
