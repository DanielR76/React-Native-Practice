import { useContext } from "react";
import { AuthContext, setUser } from "../context";

export const useAuth = () => {
	const { authState } = useContext(AuthContext);
	return authState;
};

export const setAuthDispatch = () => {
	const { setAuthState } = useContext(AuthContext);

	const setUserDispatch = (payload) => setAuthState(setUser(payload));

	return { setUserDispatch };
};
