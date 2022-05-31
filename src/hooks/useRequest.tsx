import { BaseUrlApi } from "../utilities/consts";

export const useRequest = () => {
	const getService = async (path: string) => {
		const endPoint = `${BaseUrlApi.Url}/${path}`;

		try {
			const response = await fetch(endPoint);
			return await response.json();
		} catch (error) {
			return error;
		}
	};

	return getService;
};
