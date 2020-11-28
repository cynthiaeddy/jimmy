import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

				<nav id="navbar">
          <h2>
            <ul>
						<li>
							<Link to="/" className="home">
								Home
							</Link>
						</li>
						<li>
							<Link to="/world-food" className="world-food">
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
          <li>
							<Link to="/alt-navbar" className="alt-navbar">
								Alt Navbar
							</Link>
          </li>
          <li>
							<Link to="/alt-home" className="alt-home">
								Alt Home
							</Link>
              </li>
              </ul>
					</h2>
				</nav>



  );
};

export default Navbar;
