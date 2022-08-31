import { useContext } from "react";
import { AuthContext, setUser } from "../context";

export const useAuth = () => {
	const { authState, setAuthState } = useContext(AuthContext);

	const setUserDispatch = (payload) => setAuthState(setUser(payload));

	return { authState, setUserDispatch };
};
