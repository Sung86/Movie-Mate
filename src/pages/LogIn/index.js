import './style.scss';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
const LogIn = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.table(email, password);
		//temporary hard cord login details
		if (email.trim() === 'bob@gmail.com' && password.trim() === 'bob123') {
			history.push('/');
		}
	};
	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<h1>Login</h1>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email address"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<button type="submit">Login to your account</button>
				<span className="no-account-text">
					Don't have an account?
					<Link to="/signup" className="signup-link">
						Sign Up
					</Link>
				</span>
			</form>
		</div>
	);
};

export default LogIn;
