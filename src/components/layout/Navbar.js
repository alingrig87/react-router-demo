import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="posts">Posts</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
