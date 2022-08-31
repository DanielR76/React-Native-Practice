import { createContext, useState } from "react";

type Props = {
	userAuth: UserDetailType;
	setUser?: (str: UserDetailType) => void;
};

const initState: Props = {
	userAuth: { username: "", firstname: "", lasname: "", email: "" },
	setUser: () => {},
};

export const AuthContext = createContext(initState);

export const ContextProvider = ({ children }) => {
	const [auth, setAuth] = useState(initState.userAuth);

	const setUser = (value: UserDetailType) => setAuth(value);

	const data: Props = {
		userAuth: auth,
		setUser,
	};

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
