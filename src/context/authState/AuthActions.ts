export enum Actions {
	SET_USER = "SET_USER",
}

export const setUser = (payload: any): ContextType => ({
	type: Actions.SET_USER,
	payload,
});
