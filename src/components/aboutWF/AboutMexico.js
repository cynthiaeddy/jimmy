import React from 'react';
import Images from '../../carouselMexico/Images'
import ForwardArrow from '../../carouselMexico/ForwardArrow'
import BackArrow from '../../carouselMexico/BackArrow'
import Slide from '../../carouselMexico/Slider'


class AboutMexico extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      activeIndex: 0,
      length: Images.length
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
    <div className='wf-container'>

      <div className='wf-content'>
      <BackArrow
        goToPrevSlide={() => this.goToPrevSlide()}
      />
    <div className='slider-text'>
      <Slide
        activeIndex={this.state.activeIndex}
      />
    </div>
      <ForwardArrow
        goToNextSlide={() => this.goToNextSlide()}
      />

      </div>
      </div>
  );
};
}

export default AboutMexico;



