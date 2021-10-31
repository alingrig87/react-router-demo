import React from 'react';
import { Route } from 'react-router-dom';

const Welcome = (props) => {
	return (
		<div>
			<h2>Welcome to our page!</h2>
			{/* nested component */}
			<Route path="/welcome/alin">
				<div>
					<p>Welcome, Alin!</p>
				</div>
			</Route>
		</div>
	);
};

export default Welcome;
