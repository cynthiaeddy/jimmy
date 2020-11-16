import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../navbar/ToggleButton'



const Navbar = () => {
  return (

		<nav id="navbar">
			<h4>James Oseland</h4>
			<div  className="navbarItems">
			<h4>Menu</h4>
			<Link to="/alt-navbar"><div  className='boxes'><ToggleButton /></div></Link>
			</div>
		</nav>
  );
};

export default Navbar;
