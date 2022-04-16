import { PathAPI } from "../utilities/consts";

export const useRequest = () => {
	const getService = async (path: string) => {
		const endPoint = `${PathAPI.Url}/${path}`;

		try {
			const response = await fetch(endPoint);
			const value = await response.json();
			return value;
		} catch (error) {
			return error;
		}

		// return fetch(endPoint)
		// 	.then((response) => response.json())
		// 	.catch((e) => console.error(e));
	};

	return getService;
};
