import { Actions } from "./AuthActions";

export const reducer = (state: UserDetailType, action: ContextType) => {
	switch (action.type) {
		case Actions.SET_USER: {
			const { username, firstname, lastname, email } = action.payload;
			return { ...state, username, firstname, lastname, email };
		}
		default:
			throw new Error();
	}
};
