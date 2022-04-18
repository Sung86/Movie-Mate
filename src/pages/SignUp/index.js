import './style.scss';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import logoIcon from '../../assets/logo.svg';
import { signUp, signOut } from '../../services/firebase/authentication';
import { validateSignUp } from '../../utils/validations';

const SignUp = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isOnSubmit, setIsOnSubmit] = useState(false);
	const isDisableButton =
		isOnSubmit || [email, password, confirmPassword].includes('');
	const [emailErrors, setEmailErrors] = useState([]);
	const [passwordErrors, setPasswordErrors] = useState([]);
	const [confirmPasswordErrors, setConfirmPasswordErrors] = useState([]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsOnSubmit(true);
		setEmailErrors([]);
		setPasswordErrors([]);
		setConfirmPasswordErrors([]);

		const { isValid, emailErrors, passwordErrors, confirmPasswordErrors } =
			validateSignUp(email, password, confirmPassword);

		if (isValid) {
			const res = await signUp(email, password);
			const isSignUp = res.status;
			if (isSignUp) {
				await signOut();
				history.push('/signin');
			}
		} else {
			setEmailErrors(emailErrors);
			setPasswordErrors(passwordErrors);
			setConfirmPasswordErrors(confirmPasswordErrors);
		}
		setIsOnSubmit(false);
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
					className={emailErrors.length ? '--error-input' : ''}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email Address"
					required
					disabled={isOnSubmit}
				/>
				<span className={`${emailErrors.length ? '' : '--hide'} error-message`}>
					{emailErrors.join('. ')}
				</span>
				<input
					value={password}
					className={passwordErrors.length ? '--error-input' : ''}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
					required
					disabled={isOnSubmit}
				/>
				<span
					className={`${passwordErrors.length ? '' : '--hide'} error-message`}
				>
					{passwordErrors.join('. ')}
				</span>
				<input
					value={confirmPassword}
					className={confirmPasswordErrors.length ? '--error-input' : ''}
					onChange={(e) => setConfirmPassword(e.target.value)}
					type="password"
					placeholder="Confirm Password"
					required
					disabled={isOnSubmit}
				/>
				<span
					className={`${
						confirmPasswordErrors.length ? '' : '--hide'
					} error-message`}
				>
					{confirmPasswordErrors.join('. ')}
				</span>
				<button
					type="submit"
					disabled={isDisableButton}
					className={isDisableButton ? '' : '--enable'}
				>
					Create an account
				</button>
				<span className="no-account-text">
					Already have an account?
					<div
						onClick={() => !isOnSubmit && history.push('/signin')}
						className="signin-link"
					>
						Sign In
					</div>
				</span>
			</form>
		</div>
	);
};

export default SignUp;
