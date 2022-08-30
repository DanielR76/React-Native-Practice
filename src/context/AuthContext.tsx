import { createContext, useState } from "react";

type Props = {
	user: string;
	setUser: (str: string) => void;
};

const initState: Props = {
	user: "",
	setUser: () => {},
};

export const AuthContext = createContext(initState);

export const ContextProvider = ({ children }) => {
	const [auth, setAuth] = useState(null);

	const setUser = (value: string) => setAuth(value);

	const data = {
		user: auth,
		setUser,
	};

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
