import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navbar.css'



const NavBarToggle = () => {
  return (
    <div >

      <h2>
            <ul className='toggleNavBar'>
						<li>
							<Link to="/" className="alt-home">
								Home
							</Link>
              </li>
						<li>
							<Link to="/world-foods" className="world-foods">
								About World Foods
							</Link>
						</li>
						<li>
							<Link to="/about-james" className="about-james">
								About Jim
							</Link>
              </li>
              <li>
							<Link to="/sign-up" className="sign-up">
								Sign Up
							</Link>
              </li>
              <li>
							<Link to="/videos" className="videos">
								Videos
							</Link>
          </li>

              </ul>
					</h2>

    </div>
  );
};

export default NavBarToggle;
