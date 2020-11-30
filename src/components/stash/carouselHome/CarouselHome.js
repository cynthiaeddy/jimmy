import React from 'react';

import imageData from './ImagesHome'

import SlideHome from './SlideHome'
import '../../stylesheets/CarouselHome.css'



class CarouselHome extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      activeIndex: 0,
      length: imageData.length
    };
  }

  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
      if(index === length - 1) {
        index = 0
      }
      else {
        index++;
      }
    this.setState({
    activeIndex: index
      });
  }


  render (){
    console.log()
    return (

    <div className='wf-content'>

    <div className='slider-items'>
      <Slide
         activeIndex={this.state.activeIndex}
         goToNextSlide={() => this.goToNextSlide()}
      />
      </div>

        </div>
  );
};
}

export default CarouselHome;



