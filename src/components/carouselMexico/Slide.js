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
            <h1 className={index === 0 ? 'mainSlide image' : 'slider-item image'}>{s.title}</h1>
              {s.img}

          </div>
        ) }
        </section>
    )
  }
}
export default Slide;


// <section>
//       {
//         this.state.landing.map((s, index) =>
//           <div className={
//             index === this.props.activeIndex ? 'active' : 'slide'}
//             key={index}>
//               <h1 className={index === 0 ? 'mainSlide heading' : 'slider-item heading'}>{s.title}</h1>
//               <p>{s.description}</p>
//               <Link to='../../library/Library'><button className='button'>{s.buttons}</button></Link>
//               <button className={index === 0 ? 'secondButton' : 'noButton'} onClick={this.props.goToNextSlide}>{s.buttons2}</button>
//           </div>
//         ) }
//         </section>

// return (
//   <li
//     className={
//       this.props.index == this.props.activeIndex
//         ? "carousel__slide carousel__slide--active"
//         : "carousel__slide"
//     }
//   >
//     <p className="carousel-slide__content">{this.props.slide.content}</p>

//     <p>
//       <strong className="carousel-slide__author">
//         {this.props.slide.author}
//       </strong>,
//       {" "}
//       <small className="carousel-slide__source">
//         {this.props.slide.source}
//       </small>
//     </p>
//   </li>
// );
