import React from 'react';
import imageData from '../carouselMexico/Images'
import ForwardArrow from '../carouselMexico/ForwardArrow'
import BackArrow from '../carouselMexico/BackArrow'
import Slide from '../carouselMexico/Slide'
import '../../stylesheets/AboutWF.css'



class AboutMexico extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      activeIndex: 0,
      length: imageData.length
    };
  }
  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
      if(index < 1) {
      index = length - 1;
      }
      else {
        index--;
      }
      this.setState({
      activeIndex: index
    });
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
  return (
    // <div className='wf-container'>

    <div className='wf-content'>
      <div className='arrows back'>
      <BackArrow
        goToPrevSlide={() => this.goToPrevSlide()}
        />
        </div>
    <div className='slider-item'>
      <Slide
        activeIndex={this.state.activeIndex}
      />
      </div>
      <div className='arrows front'>
      <ForwardArrow
        goToNextSlide={() => this.goToNextSlide()}
      />

      </div>
       </div>
  );
};
}

export default AboutMexico;



