import './App.css';
import { Route, Switch } from 'react-router-dom';
import Posts from './components/posts/Posts';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import PostDetails from './components/posts/PostDetails';
import Welcome from './components/layout/Welcome';

const App = () => {
	return (
		<div className="App">
			<div>
				<Navbar />
			</div>
			<div className="container">
				<Switch>
					<Route path="/welcome">
						<Welcome />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route exact path="/posts">
						<Posts />
					</Route>
					<Route path="/posts/:postId">
						<PostDetails />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default App;
