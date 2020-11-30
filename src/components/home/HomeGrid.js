import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHome from '../navbarHome/NavbarHome'
import CarouselHome1 from '../carouselHome1/CarouselHome1'


import '../../stylesheets/HomeGrid.css'

import mexico from '../../assets/images/mexico.jpg'
import paris from '../../assets/images/paris.jpg'



import openerBlue1 from '../../assets/images/openerBlue1.jpg'
import openerCorn1 from '../../assets/images/openerCorn1.jpg'
import openerDessert1 from '../../assets/images/openerDessert1.jpg'
import openerFighter1 from '../../assets/images/openerFighter1.jpg'
import openerFlan1 from '../../assets/images/openerFlan1.jpg'
import openergal1 from '../../assets/images/openergal1.jpg'

import openerMan1 from '../../assets/images/openerMan1.jpg'
import openerOysters1 from '../../assets/images/openerOysters1.jpg'
import openerRed1 from '../../assets/images/openerRed1.jpg'
import openerWoman1 from '../../assets/images/openerWoman1.jpg'
import openerWaiter1 from '../../assets/images/openerWaiter1.jpg'







class HomeGrid extends React.Component {

  // state = {



  // }

//   componentDidMount() {
//     var intervalId = setInterval(this.timer, 1000);
//     // store intervalId in the state so it can be accessed later:
//     this.setState({intervalId: intervalId});
//  }

//  componentWillUnmount() {
//     // use intervalId from the state to clear the interval
//     clearInterval(this.state.intervalId);
//  }
//  timer() {
//     // setState method is used to update the state
//     this.setState({ currentCount: this.state.currentCount -1 });
//  }

//  render() {
//      // You do not need to decrease the value here
//      return (
//        <section>
//         {this.state.currentCount}
//        </section>
//      );
//  }



  render() {
    return (

      <div className='home-container'>
        <NavbarHome />

        <div className='home outer-grid'>

          <div className='grid-1 header'>
            <h1>World Food</h1>
          </div>

          <div className='grid-2 left'>
            <img src={openergal1} className='gal' alt=''></img>
            <img src={openerFlan1} className='flan' alt=''></img>
            <img src={openerCorn1} className='corn' alt=''></img>
            <img src={openerWoman1} className='woman' alt=''></img>
            <img src={openerMan1} className='man' alt=''></img>
            <img src={openerDessert1} className='dessert' alt=''></img>
          </div>

          <div className='grid-3 main'>
            <CarouselHome1/>
            {/* <div>
              <Link to="/world-food" className="world-food"><img src={mexico} className='mexico' alt=''></img></Link></div>
            <div>
              <img src={paris} className='mexico' alt=''></img>
            </div> */}
          </div>

          <div className='grid-4 right'>
            <img src={openerBlue1} className='image-tl' alt=''></img>
            <img src={openerWaiter1} className='image-tr' alt=''></img>
            <div className='homeDek copy'>
              <div className='help'>
                <h4><span className='intro'>Introducing World Food,</span> an exceptional new series in the tradition of classic cookbooks that take you on a journey to the world's greatest cuisines and the remarkable cultures they come from.</h4>

              </div>
              <button className='signUpBtn'><h7>SIGN UP NOW!</h7></button>
            </div>
            <img src={openerOysters1} className='image-m' alt=''></img>
            <img src={openerFighter1} className='image-b' alt=''></img>
          </div>

          <div>
            <h2 className='grid-5 footer'>Photography by James Roper</h2>
          </div>

        </div>
      </div>
    );
  }
};

export default HomeGrid;
