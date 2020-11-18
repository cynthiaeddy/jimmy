import React from 'react';
import imageData from '../carouselMexico/Images'
import '../../stylesheets/AboutWF.css'


class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {landing: imageData};
  }
render() {
    return(
      <section>
      {
        this.state.landing.map((s, index) =>
          <div className={
            index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}>
            <div className={index === 0 ? 'mainSlide image' : 'slider-item image'}></div>
            {s.img}
            {/* <div className={index === 0 ? 'arrows back gone' : 'backArrow show'}></div> */}

          </div>
        ) }
        </section>
    )
  }
}
export default Slide;


