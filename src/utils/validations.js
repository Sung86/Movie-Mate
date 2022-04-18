import { PasswordRules } from '../utils/constants';

export const validateSignUp = (email, password, confirmPassword) => {
	const emailErrors = [];
	const passwordErrors = [];
	const confirmPasswordErrors = [];

	const isEmptyEmail = email.trim() === '';
	const isEmptyPassword = password.trim() === '';
	const isEmptyConfirmPassword = confirmPassword.trim() === '';

	if (isEmptyEmail) emailErrors.push('Email cannot be empty');
	if (isEmptyPassword) passwordErrors.push('Password cannot be empty');
	else {
		const isValidPassowrd = validateSignUpPassword(password);
		if (!isValidPassowrd) passwordErrors.push(PasswordRules());
	}
	if (isEmptyConfirmPassword)
		emailErrors.push('Confirm password cannot be empty');
	else {
		const isPasswordMatch = password === confirmPassword;
		if (!isPasswordMatch) confirmPasswordErrors.push('Passwords must match');
	}

	const isValidSignUp =
		!emailErrors.length &&
		!passwordErrors.length &&
		!confirmPasswordErrors.length;

	return {
		isValid: isValidSignUp,
		emailErrors,
		passwordErrors,
		confirmPasswordErrors,
	};
};

/**
 * validate signup password.
 * rules:
 * 1. must not contain any whitespaces
 * 2. must contain at least one uppercase character
 * 3. must contain at least one lowercase character
 * 4. must contain at least one digit
 * 5. must have at least one special character
 * 6. the password must be 8 - 16 characters long
 * @param {String} password - password to be validated
 * @returns whether the given password is valid
 */
const validateSignUpPassword = (password) => {
	const regex =
		/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
	return regex.test(password);
};
