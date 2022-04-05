import './style.scss';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
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
			console.log('hi');
			history.push('/login');
		}
	};
	return (
		<div className="signup-container">
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
					<Link to="/signup" className="signup-link">
						Log In
					</Link>
				</span>
			</form>
		</div>
	);
};

export default SignUp;
