import { PathAPI } from "../utilities/consts";

export const useRequest = () => {
	const getService = async (path: string) => {
		const endPoint = `${PathAPI.Url}/${path}`;

		try {
			const response = await fetch(endPoint);
			return await response.json();
		} catch (error) {
			return error;
		}
	};

	return getService;
};
