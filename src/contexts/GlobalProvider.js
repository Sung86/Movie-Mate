import { useMemo, createContext } from 'react';
export const GlobalContext = createContext({});

const initialState = {};

const GlobalProvider = (props) => {
	const state = () => initialState;
	const {} = state();

	const contextValue = useMemo(() => ({}), []);

	return (
		<GlobalContext.Provider
			value={{
				contextValue,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
