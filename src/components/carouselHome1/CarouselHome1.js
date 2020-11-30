import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mexico from '../../assets/images/mexico.jpg'
import paris from '../../assets/images/paris.jpg'

class CarouselHome1 extends Component {
//   state = {
//     currentIndex: 0
//   }

//   setNextImage() {
//     // setState method is used to update the state
//        let index = this.state.currentIndex;
//        if(index == yourMax_Image_Count)
//           index == 1
//        this.setState({ : this.state.currentIndex -1 });
//  },
  render() {
    return (
      <div>
        <div>
          <Link to="/world-food" className="world-food"><img src={mexico} className='mexico' alt=''></img></Link>
        </div>
        <div>
          <img src={paris} className='mexico' alt=''></img>
        </div>
        </div>
    )
  }
}



export default CarouselHome1;
