import './style.scss';
import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import logoIcon from '../../assets/logo.svg';
import { signIn } from '../../services/firebase/authentication';
import { GlobalContext } from '../../contexts/GlobalProvider';

const SignIn = () => {
	const { setUser, setIsSignIn } = useContext(GlobalContext);
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isOnSubmit, setIsOnSubmit] = useState(false);
	const [isError, setIsError] = useState(false);
	const isDisableButton = isOnSubmit || email === '' || password === '';

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsError(false);
		setIsOnSubmit(true);

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
		setIsOnSubmit(false);
	};

	return (
		<div className="signin-container">
			<div
				className="logo-container"
				onClick={() => !isOnSubmit && history.push('/')}
			>
				<img src={logoIcon} width="100%" height="100%" alt="logo" />
			</div>

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
					disabled={isOnSubmit}
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
					required
					disabled={isOnSubmit}
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
					<div
						onClick={() => !isOnSubmit && history.push('/signup')}
						className="signup-link"
					>
						Sign Up
					</div>
				</span>
			</form>
		</div>
	);
};

export default SignIn;
