import { createContext, useReducer } from "react";
import { initialState, reducer } from "./AuthReducer";

type Props = {
	authState: UserDetailType;
	setAuthState?: React.Dispatch<ContextType>;
};

const initState: Props = {
	authState: { ...initialState },
	setAuthState: () => {},
};

export const AuthContext = createContext(initState);

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const data: Props = {
		authState: state,
		setAuthState: dispatch,
	};

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
