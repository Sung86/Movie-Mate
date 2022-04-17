import './style.scss';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import logoIcon from '../../assets/logo.svg';
import { signIn } from '../../services/firebase/authentication';
import { GlobalContext } from '../../contexts/GlobalProvider';

const SignIn = () => {
	const { setUser, setIsSignIn } = useContext(GlobalContext);
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isSubmit, setIsSubmit] = useState(false);
	const [isError, setIsError] = useState(false);
	const isDisableButton = isSubmit || email === '' || password === '';

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsError(false);
		setIsSubmit(true);

		if (email.trim() !== '' && password.trim() !== '') {
			const res = await signIn(email, password);
			const user = res.data;
			const isSignIn = res.status;
			setIsError(!isSignIn);
			if (isSignIn) {
				setUser(user);
				setIsSignIn(isSignIn);
				history.push('/');
			}
		}
		setIsSubmit(false);
	};

	return (
		<div className="signin-container">
			<Link to="/">
				<div className="logo-container">
					<img src={logoIcon} width="100%" height="100%" alt="logo" />
				</div>
			</Link>

			<form className="signin-form" onSubmit={handleSubmit}>
				<h1>Sign In</h1>
				{
					<span className={`${isError ? '' : 'hide'}   error-message`}>
						Invalid Account
					</span>
				}
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email address"
					required
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
					required
				/>
				<button
					type="submit"
					disabled={isDisableButton}
					className={isDisableButton ? '' : '--enable'}
				>
					Sign In to your account
				</button>
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
