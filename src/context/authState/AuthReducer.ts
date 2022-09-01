export const initialState = {
	username: "",
	firstname: "",
	lastname: "",
	email: "",
};

export const reducer = (state: UserDetailType, action: ContextType) => {
	switch (action.type) {
		case "SET_USER": {
			const { username, firstname, lastname, email } = action.payload;
			return { ...state, username, firstname, lastname, email };
		}
		case "RESET_USER": {
			return { ...initialState };
		}
		default:
			throw new Error();
	}
};
