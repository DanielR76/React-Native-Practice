import { createContext, useReducer } from "react";
import { reducer } from "./AuthReducer";

type Props = {
	authState: UserDetailType;
	setAuthState?: React.Dispatch<any>;
};

const initialState = {
	username: "",
	firstname: "",
	lasname: "",
	email: "",
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
