import { useContext } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
	const { authState, setAuthState } = useContext(AuthContext);

	const setUserDispatch = (payload: any) =>
		setAuthState({
			type: "SET_USER",
			payload,
		});

	const resetUserDispatch = () =>
		setAuthState({
			type: "RESET_USER",
			payload: null,
		});

	return { authState, setUserDispatch, resetUserDispatch };
};
