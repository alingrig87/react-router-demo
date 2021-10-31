import './App.css';
import { Route } from 'react-router-dom';
import Posts from './components/posts/Posts';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';

const App = () => {
	return (
		<div className="App">
			<div>
				<Navbar />
			</div>
			<div className="container">
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/posts">
					<Posts />
				</Route>
			</div>
		</div>
	);
};

export default App;
