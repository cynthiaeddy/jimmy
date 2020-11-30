import React from 'react';
import imageData from './ImagesHome'
import '../../stylesheets/CarouselHome.css'


class SlideHome extends React.Component {
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
            <div className={index === 0 ? 'mainSlide'  : 'slider-item'}></div>
            {s.img}

          </div>
        ) }
        </section>
    )
  }
}
export default SlideHome;


