import React from 'react';

import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import mexico from '../../assets/images/mexico.jpg'
import paris from '../../assets/images/paris.jpg'

class MyCarousel extends React.Component {


  render() {
    return (
      <Carousel
      plugins={[
       'infinite',
      {
        resolve: autoplayPlugin,
        options: {
          interval: 2000,
        }
      },
    ]}
    animationSpeed={1000}
  >
    <img src={mexico} className='spread' alt='spread' />
    <img src={paris} className='spread' alt='spread' />
  </Carousel>
    );
  }
}


export default MyCarousel


