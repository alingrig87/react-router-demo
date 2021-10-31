import './App.css';
import { Route } from 'react-router-dom';
import Posts from './components/posts/Posts';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
	return (
		<div className="App">
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
	);
};

export default App;
