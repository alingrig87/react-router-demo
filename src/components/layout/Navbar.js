import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<NavLink activeClassName="active" to="/welcome">
						Welcome
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/register">
						Register
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/login">
						Login
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/posts">
						Posts
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
