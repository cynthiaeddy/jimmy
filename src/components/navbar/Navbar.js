import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../navbar/ToggleButton'



const Navbar = () => {
  return (

		<nav id="navbar">
			<h4>JAMES OSELAND</h4>
			<div  class="navbarItems">
			<h4>MENU</h4>
			<Link to="/alt-navbar"><div  className='boxes'><ToggleButton /></div></Link>
			</div>
		</nav>
  );
};

export default Navbar;
