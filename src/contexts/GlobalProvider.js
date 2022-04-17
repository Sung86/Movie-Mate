import { useState, useMemo, createContext } from 'react';
export const GlobalContext = createContext({});

const GlobalProvider = (props) => {
	const [user, setUser] = useState({});
	const [isSignIn, setIsSignIn] = useState(false);

	const contextValue = useMemo(() => ({ user, isSignIn }), [user, isSignIn]);

	return (
		<GlobalContext.Provider
			value={{
				contextValue,
				setUser,
				setIsSignIn,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
