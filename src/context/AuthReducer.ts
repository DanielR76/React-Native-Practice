import { Actions } from "./AuthActions";

export const reducer = (state: UserDetailType, action: ContextType) => {
	switch (action.type) {
		case Actions.SET_USER:
			return { ...state, ...action.payload };
		default:
			throw new Error();
	}
};
