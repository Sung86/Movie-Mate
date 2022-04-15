import './style.scss';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import logoIcon from '../../assets/logo.svg';
const SignIn = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.table(email, password);
		//temporary hard cord signin details
		if (email.trim() === 'bob@gmail.com' && password.trim() === 'bob123') {
			history.push('/');
		}
	};
	return (
		<div className="signin-container">
			<Link to="/">
				<div className="logo-container">
					<img src={logoIcon} width="100%" height="100%" />
				</div>
			</Link>

			<form className="signin-form" onSubmit={handleSubmit}>
				<h1>Sign In</h1>
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
				<button type="submit">Sign In to your account</button>
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

export default SignIn;
