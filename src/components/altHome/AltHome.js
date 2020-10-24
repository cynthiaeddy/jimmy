import React from 'react';
import ToggleButton from '../altNavbar/ToggleButton'
import mexico from '../../assets/images/mexico.jpg'
import paris from '../../assets/images/paris.jpg'
import { Link } from 'react-router-dom';


const AltHome = () => {
  return (
    <div className='alter-home'>
      {/* <Link to="/alt-home"></Link> */}
      <Link to="/alt-navbar"><div  className='boxes'><ToggleButton /></div></Link>
      <h1>James Oseland's World Food Books</h1>
      <img src={mexico} alt='Mexico Book Cover'></img>
      <img src={paris} alt='Paris Book Cover'></img>


    </div>
  );
};

export default AltHome;
