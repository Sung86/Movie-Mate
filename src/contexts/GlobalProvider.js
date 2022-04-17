import { useState, useMemo, createContext } from 'react';
export const GlobalContext = createContext({});

const GlobalProvider = (props) => {
	const [user, setUser] = useState({});
	const [isSignIn, setIsSignIn] = useState(false);
	const [currentPath, setCurrentPath] = useState('/');

	const contextValue = useMemo(
		() => ({ user, isSignIn, currentPath }),
		[user, isSignIn, currentPath]
	);

	return (
		<GlobalContext.Provider
			value={{
				contextValue,
				setUser,
				setIsSignIn,
				setCurrentPath,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
