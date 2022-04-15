import './style.scss';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import logoIcon from '../../assets/logo.svg';
const SignUp = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(email, password, confirmPassword);
		//temporary hard cord signup details
		if (
			email.trim() !== '' &&
			password.trim() !== '' &&
			confirmPassword.trim() !== ''
		) {
			history.push('/signin');
		}
	};
	return (
		<div className="signup-container">
			<Link to="/">
				<div className="logo-container">
					<img src={logoIcon} width="100%" height="100%" />
				</div>
			</Link>
			<form className="signup-form" onSubmit={handleSubmit}>
				<h1>Sign Up</h1>
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
				<input
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					type="password"
					placeholder="Confirm Password"
				/>
				<button type="submit">Create an account</button>
				<span className="no-account-text">
					Already have an account?
					<Link to="/signin" className="signin-link">
						Sign In
					</Link>
				</span>
			</form>
		</div>
	);
};

export default SignUp;
